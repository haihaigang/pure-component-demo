
import React from "react"

class Counter extends React.Component {
  changeTabBar = index => {
    console.log('Demo click')
    this.props.changeTabBar(index)
  }

  render() {
    global.logRenderCount(this)
    const { currentNavIndex } = this.props

    return (
      <div>
        <h3>Component</h3>
        {currentNavIndex}<br/>
        <button onClick={this.changeTabBar.bind(this, currentNavIndex + 1)}> click me </button>
      </div>
    )
  }
}

export default Counter
