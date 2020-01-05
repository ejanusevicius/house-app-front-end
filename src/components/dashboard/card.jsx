import React from 'react';


import { MdAttachMoney } from 'react-icons/md';
import { IoIosHome } from 'react-icons/io';

import './card.css';

const Card = props => {

    let icon = null;

    if(props.icon === "house") {
        icon = (<IoIosHome style={{color: '#7d5fff', fontSize: "1.1rem"}} />);
    }
    if(props.icon === "money") {
        icon = (<MdAttachMoney style={{color: '#7d5fff', fontSize: "1.1rem"}} />);
    }

    return(
        <div className="card__container">
            <div className="card__box">
                <p className="card__title">{props.title}</p>

                {icon}
            </div>
            <p className="card__number">{props.number}</p>
        </div>
    );
}

export default Card;