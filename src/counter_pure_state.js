import React from "react"

class CounterPureState extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      currentNavIndex: props.currentNavIndex
    }
  }

  changeTabBar = index => {
    console.log('Demo click')
    this.setState({
      currentNavIndex: index,
    },() => {
      this.props.changeTabBar(index)
    })
    // 注意这里如果放在 setState 同级，输出结果就只有一次 render 了
    // this.props.changeTabBar(index)
  }

  render() {
    global.logRenderCount(this)
    const { currentNavIndex } = this.state

    return (
      <div>
        <h3>PureComponent</h3>
        {currentNavIndex}<br/>
        <button onClick={this.changeTabBar.bind(this, currentNavIndex + 1)}> click me </button>
      </div>
    )
  }
}

export default CounterPureState
