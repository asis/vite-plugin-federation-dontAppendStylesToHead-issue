import A from 'remoteApp/A';
import B from 'remoteApp/B';

function App() {
  return (
    <div style={{ width: "100%", gap: 40, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <A />

      <B />

      <pre>{JSON.stringify(Object.keys(window).filter(key => key.startsWith("css__")))}</pre>
    </div>
  )
}

export default App
