import React from 'react';

const input = (props) => {
    let label = null;

    if (props.label) {
        label = <label>{props.label}</label>
    }

    return (
        <>
            {label}
            <input
                type={!props.inputType ? 'text' : props.inputType}
                value={props.value}
                placeholder={props.placeholder}
                onChange={(event) => props.onInputChange(event.target.value)}
            />
        </>
    )
};

export default input;
