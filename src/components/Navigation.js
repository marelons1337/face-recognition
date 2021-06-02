import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav className='nav-main animate__animated animate__fadeInDown'>
            <a onClick={ () => onRouteChange('signin') } href="/">Sign Out</a>
        </nav>
    )
}

export default Navigation; 