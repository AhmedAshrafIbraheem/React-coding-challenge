import React from 'react';
import './Components.css';

const Output = (props) => {

    return (
        <div className="OutputComponentStyle">
            <p>{props.jobDescription}</p>
            <p className={props.font}>{props.toView}</p>
        </div>
    );
}

export default Output;
