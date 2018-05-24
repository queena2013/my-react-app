import React from 'react'
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from './index.redux'

@connect(
	state=>({num:state.counter}), 
	{addGun, removeGun, addGunAsync}
)

class App extends React.Component{
  render(){
    return (
			<div>
				<h1>现有机关枪{this.props.num}</h1>
				<button onClick={this.props.addGun}>加机关枪</button>
				<button onClick={this.props.removeGun}>减机关枪</button>
				<button onClick={this.props.addGunAsync}>拖2天再给</button>
			</div>
    )
  }
}

export default App