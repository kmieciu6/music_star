import React from 'react';
import '../../scss/main.scss';

const Trigger = ({ triggerText, buttonRef, showModal }) => {
    return (
        <button
            className="linkHeader"
            ref={buttonRef}
            onClick={showModal}
        >
            {triggerText}
        </button>
    );
};
export default Trigger;