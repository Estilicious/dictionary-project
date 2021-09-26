import logo from "./esylogo1.png"
import Dictionary from "./Dictionary.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="Sunset" />
        </main>
      <footer className="App-footer">
        <small>© 2021
         <a href="https://www.linkedin.com/in/chukwu-esther-530ba94a/">Esther</a> and open sourced on <a href="https://github.com/Estilicious/dictionary-project">Github</a>
         </small>
      </footer>
    </div>
  );
}

