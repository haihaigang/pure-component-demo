
import React from "react"

class CounterPure extends React.PureComponent {
  changeTabBar = index => {
    console.log('Demo click')
    this.props.changeTabBar(index)
  }

  render() {
    global.logRenderCount(this)
    const { currentNavIndex } = this.props

    return (
      <div>
        <h3>PureComponent</h3>
        {currentNavIndex}<br/>
        <button onClick={this.changeTabBar.bind(this, currentNavIndex + 1)}> click me </button>
      </div>
    )
  }
}

export default CounterPure
