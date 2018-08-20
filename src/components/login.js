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
        <div>
            <div className="bg-everyday">Everyday.</div>
            {/* <div className="header" id="myHeader">TESTING</div> */}
            <form className="header" id="myHeader" onSubmit={this.handleSignIn.bind(this)}>
                <h1 id="login">Log in</h1>
                <input type="text" ref="username" placeholder="enter your username" /><br />
                <input type="password" ref="password" placeholder="enter your password" /><br />
                <Link to="/" className="btn btn-danger">Submit</Link>
            </form>
        </div>
        )
    }
  
}

export default LoginForm;