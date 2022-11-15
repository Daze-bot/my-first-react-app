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
    /* Always use setState(), never alter state directly */
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} 
        count={count}/>
      </div>
    );
  }
}

export default App;
