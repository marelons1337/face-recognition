import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value})
    }
    
    onNameChange = (event) => {
        this.setState({ name: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('https://floating-waters-55224.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home')
            }
        })
    }

    render() {
        return ( 
            <div className="register-container">
            <h1>Register</h1>
                <div className='form-block'>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Create Username" name="uname" onChange={this.onNameChange} required />
                </div>
                    <br />
                <div className='form-block'>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Your email" name="email" onChange={this.onEmailChange} required />
                </div>
                    <br />
                <div className='form-block'>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Create Password" name="psw" onChange={this.onPasswordChange} required />
                    <br />
                    <button onClick={ this.onSubmitRegister }type="submit">Register</button>
                </div>
            </div>
        );
    }
} 
export default Register;