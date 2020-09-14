import React from "react"

class CounterPureQuote extends React.PureComponent {
  changeTabBar = index => {
    console.log('Demo click')
    this.props.changeTabBar(index)
  }

  render() {
    global.logRenderCount(this)
    const { currentNavIndex } = this.props

    return (
      <section>
        <h3>PureComponent</h3>
        {currentNavIndex}<br/>
        <pre>{JSON.stringify(this.props.obj)}</pre>
        <button onClick={this.changeTabBar.bind(this, currentNavIndex + 1)}> click me </button>
      </section>
    )
  }
}

export default CounterPureQuote
