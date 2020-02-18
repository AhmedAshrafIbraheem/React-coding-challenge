import React from 'react';

const userInput = (props) => {

    return (
        <div className="InputComponentStyle" >
            <p>Enter Whatever you want</p>
            <input type="text" onChange={props.changed} />
        </div>
    );
}

export default userInput;
