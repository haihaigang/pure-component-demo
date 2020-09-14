import React from "react";
import Counter from "./counter";
import CounterPureQuote from "./counter_pure_quote"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNavIndex: 0
    };
  }

  changeTabBarWithEffectQuote = index => {
    this.setState(
      {
        currentNavIndex: index,
        obj: {
          m: Math.random(),
        },
      }
    )

    setTimeout(() => {
      let obj = this.state.obj
      obj.m = Math.random()

      this.setState({
        obj: obj,
      })
    }, 500)
  }

  render() {
    const { currentNavIndex, obj } = this.state

    return (
      <div>
        <h1>引入副作用-改变引用值</h1>
        <Counter
          currentNavIndex={currentNavIndex}
          obj={obj}
          changeTabBar={this.changeTabBarWithEffectQuote}
        />
        <CounterPureQuote
          currentNavIndex={currentNavIndex}
          obj={obj}
          changeTabBar={this.changeTabBarWithEffectQuote}
        />
      </div>
    );
  }
}

export default App;
