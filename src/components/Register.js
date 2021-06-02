import React from 'react';

const Register = ({ onRouteChange }) => {
    return ( 
        <div className="register-container">
        <h1>Register</h1>
            <form>
                <div className='form-block'>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Create Username" name="uname" required />
                </div>
                    <br />
                <div className='form-block'>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Create Password" name="email" required />
                </div>
                    <br />
                <div className='form-block'>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Create Password" name="psw" required />
                    <br />
                    <label htmlFor="repeat-psw"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Create Password" name="repeat-psw" required />
                    <button onClick={ () => onRouteChange('signin') }type="submit">Register</button>
                </div>
            </form>
        </div>
     );
}
 
export default Register;