import logo from "./esylogo1.png"
import Dictionary from "./Dictionary.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center mt-3 ">ESTY'S WORLD OF WORDS ✍🏽 </h1>
        <img src={logo} className="App-logo img-fluid" alt="Esther's logo" rel="noreferrer"/>
      </header>
      <main>
        <Dictionary defaultKeyword="Sunset" />
        </main>
      <footer className="App-footer">
        <small>© 2021
         <a href="https://www.linkedin.com/in/chukwu-esther-530ba94a/" target="_blank" alt="Esther's social media page" rel="noreferrer">Esther, </a>open sourced on <a href="https://github.com/Estilicious/dictionary-project">Github</a>
         and powered by<a href="https://myshionary.netlify.app/" alt="Esther's website" target="_blank" rel="noreferrer">Netlify</a>
         </small>
      </footer>
    </div>
  );
}

