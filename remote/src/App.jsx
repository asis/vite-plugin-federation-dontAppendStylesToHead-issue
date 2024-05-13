import './App.css'
import A from "./components/A"
import B from "./components/B"

function App() {
  return (
    <div className="App">
      <div className="card">
        <A />
      </div>

      <div className="card">
        <B />
      </div>

      <pre>{JSON.stringify(Object.keys(window).filter(key => key.startsWith("css__")))}</pre>
    </div>
  )
}

export default App
