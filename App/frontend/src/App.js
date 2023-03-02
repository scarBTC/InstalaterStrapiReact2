import fetch from "./components/fetch";

function App() {
  const { loading, error, data } = fetch('http://localhost:1337/api/simple-texts')

  if (loading) return <p>loading...</p>
  if (error) return <p>error</p>
 
  return (
    <div className="App">
      {
        data.map(simpletext => (
          <div key={simpletext.id} className="foto-1">
            <p>{simpletext.title}</p>
            <p>{simpletext.info}</p>
          </div>
        ))
      }
      <p>hello</p>
    </div>
  );
}

export default App;