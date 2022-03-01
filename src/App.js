import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Search />
      <footer>
        <p>
          Coded by Caroline Ko and is open-sourced on
          <a
            href="https://github.com/hancarol/weather-app"
            target="_blank"
            id="github"
            rel="noreferrer"
          >
            GitHub
          </a>
          hosted by
          <a
            href="https://www.netlify.com"
            target="_blank"
            id="netlify"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
