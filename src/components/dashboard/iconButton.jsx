import React from 'react';

import { IoMdSync, IoMdFunnel } from 'react-icons/io';

import './iconButton.css';

const styling = {
    color: "#f2efff", 
    margin: "0px 0px",
    marginTop: "2px", 
    padding: "0px 0px", 
    fontSize: "1.15rem"};
let icon = null;

const IconButton = props => {

    if(props.type === "reload") {
        icon = (<IoMdSync style={styling} />);
    }

    if(props.type === "filter") {
        icon = (<IoMdFunnel style={styling} />);
    }

    return(
        <div className="iconButton__container" onClick={props.onClick}>
            {icon}
            <p style={{color: "white", margin: "0 0", marginLeft: "0.6rem"}}>{props.text}</p>
        </div>
    );
}

export default IconButton;