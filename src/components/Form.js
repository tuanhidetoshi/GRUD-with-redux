import React from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import { add_data } from "../actions";

class Form extends React.Component {
  state = {
    name: "",
    msg: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    let id = uuid();
    e.preventDefault();
    this.props.add_data(id, this.state.name, this.state.msg);
    this.setState({ name: "", msg: "" });
  };

  render() {
    return (
      <div className="ui container form">
        <form onSubmit={e => this.onSubmit(e)} className="field">
          <input
            onChange={e => this.onChange(e)}
            type="text"
            name="name"
            placeholder="Enter you name..."
            value={this.state.name}
          />
          <textarea
            onChange={e => this.onChange(e)}
            placeholder="Enter your message..."
            name="msg"
            value={this.state.msg}
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  info: state.info
});

export default connect(
  mapStateToProps,
  { add_data }
)(Form);
