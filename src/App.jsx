import { useCallback, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";

function App() {
  const [nums, setNums] = useState([
    { value: 1, unmountCount: 0, id: 0, isMounted: true },
    { value: 2, unmountCount: 0, id: 1, isMounted: true },
    { value: 3, unmountCount: 0, id: 2, isMounted: true },
    { value: 4, unmountCount: 0, id: 3, isMounted: true },
    { value: 5, unmountCount: 0, id: 4, isMounted: true },
  ]);
  const [showReport, setShowReport] = useState(false);
  const toggleReport = useCallback(() => setShowReport((state) => !state), []);
  return (
    <div className="App">
      <h1 className="header"> Unmounting Count Tracker</h1>
      <div className="wrapperContainer">
        <CardList setNums={setNums} nums={nums} />
        <div className="btnContainer">
          <button onClick={toggleReport} className="btn">
            {showReport ? "Hide Report" : "Show Report"}
          </button>
        </div>
      </div>
      {showReport && (
        <div className="reports">
          <div className="report">Reports</div>
          {nums.map((num) => (
            <div className="report-box" key={num.id}>
              Card {num.value} has been unmounted {num.unmountCount} times
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
