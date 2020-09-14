import React from "react";
import Counter from "./counter";
import CounterPure from "./counter_pure"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNavIndex: 0
    };
  }

  changeTabBar = index => {
    this.setState({
      currentNavIndex: index
    });
  }

  render() {
    const { currentNavIndex } = this.state

    return (
      <div>
        <h1>基本用法</h1>
        <Counter
          currentNavIndex={currentNavIndex}
          changeTabBar={this.changeTabBar}
        />
        <CounterPure
          currentNavIndex={currentNavIndex}
          changeTabBar={this.changeTabBar}
        />
      </div>
    );
  }
}

export default App;
