import logo from './logo.svg';
import './App.css';
import Pelicula from './components/Pelicula'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HOOOOLA REACT
        </a>
      </header>
      <main>
        <Pelicula/> {/* es un componente  */}
      </main>
    </div>
  );
}

export default App;
