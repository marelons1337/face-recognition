import React from 'react';

const ImageLinkForm = ( { onInputChange, onButtonSubmit }) => {
    return ( 
        <div className="image-form">
            <h2>By putting the link below you can identify faces on the picture you will provide.</h2>
            <input type="text" id="link-box" name="link-box" placeholder="link to your image" onChange= { onInputChange }></input>
            <input type="submit" id="submit-link-box" onClick= { onButtonSubmit }></input>
        </div>
     );
}
 
export default ImageLinkForm;