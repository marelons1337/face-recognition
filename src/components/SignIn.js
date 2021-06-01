import React from 'react';

const SignIn = () => {
    return ( 
        <div className="login-container">
            <form>
                <div className='login-block'>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                </div>
                    <br />
                <div className='login-block'>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <br />
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
     );
}
 
export default SignIn;