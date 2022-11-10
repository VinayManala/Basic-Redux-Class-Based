import React from "react";
import { connect } from "react-redux";

class Max extends React.Component {
  render() {
    const values = this.props.counters.map((counter) => counter.value);

    return <h1>Max : {Math.max(...values)}</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  };
};

export default connect(mapStateToProps)(Max);
