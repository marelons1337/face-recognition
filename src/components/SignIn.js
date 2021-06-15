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
        console.log(this.state);
        this.props.onRouteChange('home')
    }

    render() {

        const { onRouteChange } = this.props
        return ( 
            <div className="login-container">
            <h1>Sign In</h1>
                <form>
                    <div className='form-block'>
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />
                    </div>
                        <br />
                    <div className='form-block'>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <br />
                        <button onClick={ this.onSubmitSignIn() }type="submit">Login</button>
                    </div>
                    <div>
                        <p  onClick={ () => onRouteChange('register') }>Don't have an account yet? Register. </p>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SignIn;