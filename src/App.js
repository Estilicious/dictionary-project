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
        <Dictionary />
        </main>
      <footer className="App-footer">
        <small>Coded by Esther</small>
      </footer>
    </div>
  );
}

