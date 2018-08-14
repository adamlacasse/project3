import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {

    handleSignIn(e) {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        this.props.onSignIn(username, password)
    }

    render() {
        return (
        <form onSubmit={this.handleSignIn.bind(this)}>
            <h3>Log in</h3>
            <input type="text" ref="username" placeholder="enter you username" /><br />
            <input type="password" ref="password" placeholder="enter password" /><br />
            <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
        )
    }
  
}

export default LoginForm;