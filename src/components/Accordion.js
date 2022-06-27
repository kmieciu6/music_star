import React, {useState} from 'react';
import '../scss/main.scss'

const Accordion = ({title, place, adres, hour, ticket}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            <div className='accordion-contents'>
                {isActive && <div className="accordion-content">{place}</div>}
                {isActive && <div className="accordion-content">{adres}</div>}
                {isActive && <div className="accordion-content">{hour}</div>}
                {isActive && <div className="accordion-content">{ticket}</div>}
            </div>
        </div>
    );
};

export default Accordion;