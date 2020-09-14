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

  changeTabBarWithEffect = index => {
    this.setState(
      {
        currentNavIndex: index,
      }
    )

    setTimeout(() => {
      this.setState({
        obj: {
          m: Math.random(),
        },
      })
    }, 500)
  }

  render() {
    const { currentNavIndex } = this.state

    return (
      <div>
        <h1>引入副作用</h1>
        <Counter
          currentNavIndex={currentNavIndex}
          changeTabBar={this.changeTabBarWithEffect}
        />
        <CounterPure
          currentNavIndex={currentNavIndex}
          changeTabBar={this.changeTabBarWithEffect}
        />
      </div>
    );
  }
}

export default App;
