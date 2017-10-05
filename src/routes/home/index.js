import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
// import RaisedButton from 'material-ui/RaisedButton';

import './style.css';

class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="main grid">
				<div id="title">
					<h1>Welcome to my restaurant list</h1>
				</div>
			</div>
		)
	}
}


export default connect(null, {})(Home);