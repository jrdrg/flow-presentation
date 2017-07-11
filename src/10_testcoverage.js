// @-flow

import React from 'react';

/*
type ButtonsProps = {
    value: { amount: number },
    incrementValue: (value: number) => void
};
*/

export const Buttons = (props) => {
    return (
        <div>
            <button
                onClick={() => props.incrementValue(props.value.amount + 1)}
            >
                click me
            </button>
        </div>
    );
};


export const ButtonsWrapper = (props) => {
    return (
        <div>
            <Buttons value={1} />
        </div>
    );
};
