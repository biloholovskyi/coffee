import React from 'react';
import errorPic from './error.png';
import './error.sass';

const Error = () => {
    return (
        <div className="error-container">
            <img src={errorPic} alt='error'/>
        </div>
    )
}

export default Error;