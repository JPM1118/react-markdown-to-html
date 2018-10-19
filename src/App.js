import React, { Component } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Placeholder from "./components/Placeholder";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: Placeholder()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="flex-container">
          <Editor value={this.state.markdown} onChange={this.handleChange} />
          <Previewer markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default App;
