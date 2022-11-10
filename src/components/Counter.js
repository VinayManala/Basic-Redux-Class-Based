import React from "react";

const Counter = ({ counter, index, incrementCount, decrementCount }) => (
  <div>
    <h1>
      {counter.name} : {counter.value}{" "}
    </h1>
    <p style={{ marginTop: "1rem" }}>
      <button onClick={() => incrementCount(index)}> + </button>
      <button onClick={() => decrementCount(index)}> - </button>
    </p>
  </div>
);

export default Counter;
