import React from 'react';

const FaceRecognition = ({ imageUrl, box }) => {
    return ( 
        <div className="face-box">
            <h2>Result</h2>
            <div className="box-wrapper">
                <img id = "inputImage" src={ imageUrl } alt="result of the app" />
                <div className="bounding-box" style={{
                    top: box.topRow,
                    left: box.leftCol,
                    bottom: box.bottomRow,
                    right: box.rightCol
                }}></div>
            </div>
        </div>
     );
}
 
export default FaceRecognition;