import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../actions/";
import Counter from "./Counter";

class Counters extends Component {
  renderCount = () => {
    return this.props.counters.map((counter, i) => {
      return (
        <Counter
          key={i}
          index={i}
          counter={counter}
          incrementCount={this.props.incrementCount}
          decrementCount={this.props.decrementCount}
        />
      );
    });
  };
  render() {
    return (
      <div>
        {this.renderCount()}
        <p></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  };
};

const mapdispatchToProps = () => {
  return {
    incrementCount,
    decrementCount
  };
};

export default connect(mapStateToProps, mapdispatchToProps())(Counters);
