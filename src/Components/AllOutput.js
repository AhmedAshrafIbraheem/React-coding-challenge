import React from 'react';
import Output from './Output';
import './Components.css';

const allOutput = (props) => {

    const reversedValue = props.toView.split('').reverse().join('');
    const capsValue = props.toView.toUpperCase();

    return (
        <div className="AllOutputComponentStyle">
            <Output jobDescription="Reversed" toView={reversedValue} />
            <Output jobDescription="Upper Case" toView={capsValue} />
            <Output font="largeFont" jobDescription="Larger Font" toView={props.toView} />
        </div>
    );
}

export default allOutput;
