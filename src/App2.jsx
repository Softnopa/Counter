import { useState } from 'react'

export function App2() {
  const [count, setCount] = useState(0)

  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => console.log(JSON.stringify(data)))
  }

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        style={{ background: 'blue', color: 'white' }}
        className="border rounded px-2 py-1"
      >
        Count +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ background: 'blue', color: 'white' }}
        className="border rounded px-2 py-1"
      >
        Count -
      </button>
      <button
        onClick={fetchData}
        style={{ background: 'green', color: 'white' }}
        className="border rounded px-2 py-1"
      >
        FETCH DATA
      </button>
    </>
  )
}
