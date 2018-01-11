import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { test } from '../../actions/AppAction'
import {connect} from 'react-redux'

import Button from 'material-ui/Button';

import './style.css';

class Home extends Component {
	handleClick = e => {
		this.props.test()
	}
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="main grid">
				<div id="title">
					<h1>Welcome to my restaurant list</h1>
				</div>
				<Button onClick={this.handleClick}>test</Button>
			</div>
		)
	}
}



export default connect(null, { test })(Home);