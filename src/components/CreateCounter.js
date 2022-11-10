import React from "react";
import { connect } from "react-redux";
import { newCounter } from "../actions/";

class CreateCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <div>
        <h1>CreateCounter</h1>
        <input
          name="createCounter"
          placeholder=""
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={() =>
            this.state.name !== "" && this.props.newCounter(this.state.name)
          }
        >
          Create
        </button>
      </div>
    );
  }
}

// const mapDispatchToProps = () => {
//   return {
//     newCounter
//   };
// };

export default connect(undefined, { newCounter })(CreateCounter);
