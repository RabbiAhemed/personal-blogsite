import logo from "./logo.svg";
import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <img
        src="https://i.ibb.co/fQLqd0m/The-english-lad.png"
        alt=""
        className="m-5"
      />
    </div>
  );
}

export default App;
