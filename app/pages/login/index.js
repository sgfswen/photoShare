import React, {PropTypes, Component} from 'react'
import { Link } from 'react-router'
import Sign from '../../containers/Sign'
import { login } from '../../actions'

export default class Login extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Sign
					linkText = 'sign up'
					btnText = 'login'
					link = '/signup'
					clickFunc = {login}
				/>
			</div>
		)
	}
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}
