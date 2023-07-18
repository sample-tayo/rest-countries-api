import "./index.css";
import { Navbar } from "./navbar/Navbar";
import SearchBox from "./search/Search";
import Datamap from "./Datamap";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Datamap />
    </div>
  );
}

export default App;
