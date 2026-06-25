import { useState } from 'react'
import { App2 } from './App2'

export function App() {
  const [secondApp, setSecondApp] = useState(false)

  if (secondApp) {
    return <App2 />
  }

  return (
    <button
      onClick={() => setSecondApp(true)}
      style={{ background: 'blue', color: 'white' }}
      className="border rounded px-2 py-1"
    >
      Go to counter site
    </button>
  )
}
