import { useState } from 'react'
import "./App.css";

function App(){

  const [things, setThings] = useState([
  { id: 1, text: "Smörgåsar", done: false },
  { id: 2, text: "Dricka", done: false },
  { id: 3, text: "Mobilladdare", done: false },
])

function toggleDone(id) {
  setThings(
    things.map((thing) =>
      thing.id === id ? { ...thing, done: !thing.done } : thing
    )
  )
}

const [draft, setDraft] = useState("");

function handleChange(e) {
  setDraft(e.target.value);
}

function handleAdd() {
  const trimmed = draft.trim();
  if (!trimmed) return;

  setThings([
    ...things,
    { id: Date.now(), text: trimmed, done: false }
  ]);

  setDraft("");
}

function removeThing(id) {
  setThings (things.filter((thing) => thing.id !== id))
}

return (
  <main>
    <h1>ToDo lista</h1>

    <ul>
      {things.map(thing => (
      <li key={thing.id}>
       <button
        className={thing.done ? "done" : "not-done"}
        onClick={() => toggleDone(thing.id)}>
        {thing.done ? "✔" : "⬜"}
       </button> 
      {thing.text}
       <button className="delete"
         onClick={() => removeThing(thing.id)}>
          ✖
       </button>
      </li>
      ))}
      <input
        type="text" 
        value={draft} 
        onChange={handleChange}
        placeholder="Skriv uppgift..." 
      />
      <button type="button" onClick={handleAdd}>Lägg till</button>
    </ul>
  </main>
);

}

export default App
