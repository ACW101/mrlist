import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends Component {
	render() {
		return (
			<div>
				This is Home
				<div className="btn-group">
					<Link to="/auth/login">
						<RaisedButton label="Login" />
					</Link>
				</div>
			</div>
		)
	}
}
