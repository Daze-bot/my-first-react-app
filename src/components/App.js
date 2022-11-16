/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      mod: 1,
    }

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    /* Always use setState(), never alter state directly */
    this.setState((state) => ({
      count: state.count + state.mod,
    }));
    
    this.setMod();
  }

  setMod() {
    this.setState((state) => ({
      mod: Math.floor(state.count / 100) + 1,
    }))
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
