import React, { Component } from "react";

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="editor wrapper">
        <div className="editor__header">Editor.</div>
        <div className="editor__body" />
      </div>
    );
  }
}
