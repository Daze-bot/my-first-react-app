/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} 
        count={this.state.count}/>
      </div>
    );
  }
}

export default App;
