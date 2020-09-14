import React from "react";
import Counter from "./counter";
import CounterPureState from "./counter_pure_state"

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
        <h1>PureComponent state</h1>
        <Counter
          currentNavIndex={currentNavIndex}
          changeTabBar={this.changeTabBar}
        />
        <CounterPureState
          currentNavIndex={currentNavIndex}
          changeTabBar={this.changeTabBar}
        />
      </div>
    );
  }
}

export default App;
