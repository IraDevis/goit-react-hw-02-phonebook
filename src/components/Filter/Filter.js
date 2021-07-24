import { Component } from "react";
import PropTypes from "prop-types";

class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  render() {
    return (
      <>
        <label>
          Find by name
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
          ></input>
        </label>
      </>
    );
  }
}

export default Filter;
