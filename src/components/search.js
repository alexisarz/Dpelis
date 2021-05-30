import React from 'react';


function SearchBar(props){
    return (
        <div className="search-container">
            <input className="search-bar" type="text"></input>
            <button className="search-btn">{props.li}</button>
        </div>
    )
}

export default SearchBar;
