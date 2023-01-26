import logo from "./logo.svg";
import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Components/Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <img
        src="https://i.ibb.co/fQLqd0m/The-english-lad.png"
        alt=""
        className="m-5"
      />
      <Home></Home>
    </div>
  );
}

export default App;
