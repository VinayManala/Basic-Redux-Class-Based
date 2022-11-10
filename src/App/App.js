import "../styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers/";
import Counters from "../components/Counters";
import Total from "../components/Total";
import Max from "../components/Max";
import CreateCounter from "../components/CreateCounter";

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <h1 style={{ textAlign: "center" }}>
        Counter State management using Redux
      </h1>
      <div className="App">
        <div>
          <Counters />
        </div>
        <hr />
        <div>
          <Total />
          <Max />
        </div>
        <hr />
        <div>
          <CreateCounter />
        </div>
      </div>
    </Provider>
  );
}
