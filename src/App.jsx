import "./App.css";
import CreateCards from "./components/cards";

function App() {
  return (
    <div className="App">
      <h1 className="header"> Unmounting Count Tracker</h1>
      <div className="wrapperContainer">
        <CreateCards />
        <div className="btnContainer">
          <button className="btn">Get report</button>
        </div>
      </div>
      <div className="reports">
        text
        <br />
        text
      </div>
    </div>
  );
}

export default App;
