import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return ( 
        <div className="face-box">
            <h2>Result</h2>
            <img id = "inputImage" src={ imageUrl } alt="result of the app" />
        </div>
     );
}
 
export default FaceRecognition;