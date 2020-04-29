import React from 'react';
import './UserInput.css';

const userInput = ( props ) => {
    
    return (
        <div className="UserInput">
            <h2>Type to change Username</h2>
            <input type="text" className="input-user" onChange={ props.changed } value={ props.userName }/>
        </div>
    );
}

export default userInput;