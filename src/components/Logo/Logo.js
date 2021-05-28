import React from 'react';
import face from './face.png'

const Logo = () => {
    return ( 
        <div className="logo-div">
            <img src={face} alt="app logo"/>
            <h1 className="animate__animated animate__fadeInDown" >Face Recognition</h1>   
        </div>
    );
}
 
export default Logo;