import { data } from 'autoprefixer';
import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === 'loggedin'){
                this.props.onRouteChange('home')
            }
        })
    }

    render() {

        const { onRouteChange } = this.props
        return ( 
            <div className="login-container">
            <h1>Sign In</h1>
                <div className='form-block'>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input onChange={ this.onEmailChange } type="text" placeholder="Enter Email" name="uname" required />
                </div>
                    <br />
                <div className='form-block'>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input onChange={ this.onPasswordChange } type="password" placeholder="Enter Password" name="psw" required />
                    <br />
                    <button onClick={ this.onSubmitSignIn }type="submit">Login</button>
                </div>
                <div>
                    <p onClick={ () => onRouteChange('register') }>Don't have an account yet? Register. </p>
                </div>
            </div>
         );
    }
}
 
export default SignIn;