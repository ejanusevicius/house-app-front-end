import React from 'react';

import { NavLink } from 'react-router-dom';

import { IoIosHome } from 'react-icons/io';

import logo from '../../assets/icons/house_logo.png';


import './navigation.css';

const Navigation = props => {

    const activeStyle = { color: 'white', textShadow: "0px 0px 10px #FFFFFF" };


    return(
        <div className="navigation__container">
            <div style={{display: "flex"}}>
        
                <IoIosHome style={{color: '#e8e3ff', fontSize: "2.1rem", marginBottom: "8px"}}/>
                <p style={{margin: "auto 0 auto 0.5rem", fontSize: "0.75rem", color: "#e8e3ff"}}>House App</p>

            </div>
            <div className="navigation__box">
                <NavLink to="/dashboard" activeStyle={activeStyle}>Dashboard</NavLink>
                <NavLink to="/filter" activeStyle={activeStyle}>Filter</NavLink>
            </div>
        </div>
    );
}

export default Navigation