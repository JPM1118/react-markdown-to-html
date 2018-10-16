import React, { Component } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Preveiwer from "./components/Previewer";
import Previewer from "./components/Previewer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Editor />
        <Previewer />
      </div>
    );
  }
}

export default App;
