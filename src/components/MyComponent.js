/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { title, onButtonClicked, count } = this.props;

    return (
      <div>
        <h1>{
          (title instanceof Array)
            ? title.map(x => x + " ")
            : title
          }</h1>
        <button onClick={onButtonClicked}>Click Me!</button>
        <p>{count}</p>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  title: ['Jevon', 'Heather', 'Gio'],
}

export default MyComponent;
