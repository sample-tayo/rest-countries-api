// eslint-disable-next-line
import { Card } from "./card/Card";
import { Filter } from "./filter/Filter";
import "./index.css";
import { Navbar } from "./navbar/Navbar";
import SearchBox from "./search/Search";
import Datamap from "./Datamap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <SearchBox />
        <Filter />
      </section>
      <Datamap />
    </div>
  );
}

export default App;
