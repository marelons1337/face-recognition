import React from 'react';
import face from './Logo/face.png'

const FaceRecognition = ({ imageUrl, box }) => {
    return ( 
        <div className="face-box">
            <h2>Result</h2>
            {
                <div className="box-wrapper">
                    <img id = "inputImage" src={ imageUrl } onError={(e) => (e.target.src= face) } alt="result of the app" />
                    <div className="bounding-box" 
                    style={{
                        top: box.topRow,
                        left: box.leftCol,
                        bottom: box.bottomRow,
                        right: box.rightCol
                    }}>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default FaceRecognition;