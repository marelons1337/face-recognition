import React from 'react';

const SignIn = ({ onRouteChange }) => {
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
                    <button onClick={ () => onRouteChange('home') }type="submit">Login</button>
                </div>
                <div>
                    <a href="#" onClick={ () => onRouteChange('register') }>Don't have an account yet? Register. </a>
                </div>
            </form>
        </div>
     );
}
 
export default SignIn;