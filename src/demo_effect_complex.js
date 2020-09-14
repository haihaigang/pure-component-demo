import React from "react";
import Counter from "./counter";
import CounterPureComplex from "./counter_pure_complex"

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

  changeTabBar = index => {
    this.setState(
      {
        currentNavIndex: index,
        obj: {
          m: Math.random(),
        },
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
    const { currentNavIndex, obj } = this.state

    return (
      <div>
        <h1>引入副作用-复杂属性</h1>
        <Counter
          currentNavIndex={currentNavIndex}
          obj={obj}
          changeTabBar={this.changeTabBarWithEffect}
        />
        <CounterPureComplex
          currentNavIndex={currentNavIndex}
          obj={obj}
          changeTabBar={this.changeTabBarWithEffect}
        />
      </div>
    );
  }
}

export default App;
