import React from 'react';

const Rank = ({ name, entries }) => {
    return ( 
        <div className="rank-box">
            <p>Hi {name}, you have currently checked <span>{entries}</span> images</p>
        </div>
     );
}
 
export default Rank;