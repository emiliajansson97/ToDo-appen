import { useState } from 'react'

function App(){

  const [things, setThings] = useState([
  { id: 1, text: "Smörgåsar", done: false },
  { id: 2, text: "Dricka", done: false },
  { id: 3, text: "Mobilladdare", done: false },
])

return (
  <main>
    <h1>ToDo lista</h1>

    <ul>
      {things.map(thing => (
      <li key={thing.id}>
      {thing.text}
      </li>
      ))}
    </ul>
  </main>
);

}
export default App
