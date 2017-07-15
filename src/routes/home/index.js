import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
	render() {
		return (
			<div>
				This is Home
				<div className="btn-group">
					<Link to="/auth/login">
						<button  className="btn btn-default">Login</button>
					</Link>
				</div>
			</div>
		)
	}
}
