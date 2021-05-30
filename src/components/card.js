import React from 'react';



function Card(props){
    return (
        <div className="card-container">
            <img className= "img-card" alt={props.name} src={props.img}></img>
            <h4>{props.name}</h4>
            <p>{props.year}</p><p className="duration-time">{props.duration}</p>
        </div>
    )
}

export default Card;