import React from "react";
import CounterSCU from "./counter_scu";
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
        <h1>Component SCU</h1>
        <CounterSCU
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
