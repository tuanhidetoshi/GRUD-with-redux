import React from "react";
import { connect } from "react-redux";
import { fetch_data, remove_data } from "../actions";

class Showcase extends React.Component {
  componentDidMount() {
    this.props.fetch_data();
  }

  onClick = e => {
    let id = e.currentTarget.dataset.key;
    console.log(e.currentTarget.dataset.key);
    this.props.remove_data(id);
  };

  Card = ele => {
    const { id, name, msg } = ele;
    return (
      <div
        onClick={e => this.onClick(e)}
        key={id}
        data-key={id}
        className="card"
      >
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{msg}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="ui cards container">
        {this.props.info.map(ele => {
          return this.Card(ele);
        })}
      </div>
    );
  }
}

const mapStateToProp = state => ({
  info: state.info
});

export default connect(
  mapStateToProp,
  { fetch_data, remove_data }
)(Showcase);
