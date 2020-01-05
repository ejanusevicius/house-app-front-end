import React from 'react';

import './loadingSpinner.css';

const loadingSpinner = props => {
    return(
        <div style={{...props.style, width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default loadingSpinner;