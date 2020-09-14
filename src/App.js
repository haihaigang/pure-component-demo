import React from "react";
import Demo from "./demo";
import DemoEffect from "./demo_effect"
import DemoEffectComplex from "./demo_effect_complex"
import DemoEffectQuote from "./demo_effect_quote"
import DemoState from "./demo_state"
import DemoSCU from "./demo_scu"

class App extends React.Component {
  render() {
    return (
      <div>
        <Demo />
        <DemoEffect />
        <DemoEffectComplex />
        <DemoEffectQuote />
        <DemoState />
        <DemoSCU />
      </div>
    );
  }
}

export default App;

function logRenderCount() {
  let that = this;
  if (!this.renderCount) this.renderCount = {};

  return function(inst) {
    let name = inst.__proto__.constructor.name;
    if (typeof that.renderCount[name] === "undefined") {
      that.renderCount[name] = 0;
    }
    let count = that.renderCount[name]++;
    console.log(`${name} render count = ${count}`);
    return inst;
  };
}

global.logRenderCount = new logRenderCount();

// Demo click
// Counter render count = 5
// CounterPure render count = 2

// Demo click
// Counter render count = 5
// CounterPure render count = 2
// Counter render count = 6

// Demo click
// Counter render count = 11
// CounterPureComplex render count = 5
// Counter render count = 12
// CounterPureComplex render count = 6

// Demo click
// Counter render count = 13
// CounterPureQuote render count = 1
// Counter render count = 14
