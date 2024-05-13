import A from "./components/A"
import B from "./components/B"

function App() {
  return (
    <div>
      <A />

      <B />

      <pre>{JSON.stringify(Object.keys(window).filter(key => key.startsWith("css__")))}</pre>
    </div>
  )
}

export default App
