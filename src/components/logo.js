import React from 'react';
import '../App.css';


function Logo(props){
    return(
        <div>
            <a className="Logo" href={props.href}><h1>DPelis</h1></a> 
        </div>
    )
}

export default Logo;