import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {            
            return(
            <nav className='nav-main animate__animated animate__fadeInDown'>
                <p onClick={ () => onRouteChange('signout') } >Sign Out</p>
            </nav>
            )
        }else {
            return(
            <nav className='nav-main animate__animated animate__fadeInDown'>
                <p onClick={ () => onRouteChange('signin') } >Sign In</p>
                <p onClick={ () => onRouteChange('register') } >Register</p>
            </nav>
            )
        }
}

export default Navigation; 