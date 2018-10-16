import React, { Component } from "react";

export default class Previewer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="previewer wrapper">
        <div className="previewer__header">Previewer.</div>
        <div className="previewer__body" />
      </div>
    );
  }
}
