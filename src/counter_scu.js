import React from "react"

class CounterSCU extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentNavIndex: props.currentNavIndex
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.currentNavIndex !== this.props.currentNavIndex) {
      return true
    }

    if (nextState.currentNavIndex !== this.state.currentNavIndex) {
      return true
    }

    return false
  }

  changeTabBar = index => {
    console.log('Demo click')
    this.setState({
      currentNavIndex: index,
    },() => {
      this.props.changeTabBar(index)
    })
  }

  render() {
    global.logRenderCount(this)
    const { currentNavIndex } = this.state

    return (
      <div>
        <h3>Component</h3>
        {currentNavIndex}<br/>
        <button onClick={this.changeTabBar.bind(this, currentNavIndex + 1)}> click me </button>
      </div>
    )
  }
}

export default CounterSCU
