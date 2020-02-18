import React from 'react';
import Output from './Output';

const allOutput = (props) => {

    const reversedValue = props.toView.split('').reverse().join('');
    const capsValue = props.toView.toUpperCase();


    return (
        <div>
            <Output toView={reversedValue} />
            <Output toView={capsValue} />
            <Output toView={props.toView} />
        </div>
    );
}

export default allOutput;
