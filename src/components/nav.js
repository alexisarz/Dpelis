import React, {useState} from 'react';
import Logo from './logo';
import Search from './search';
import GenreMenu from './genreMenu';
import SliderHead from './slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faAngleDown, faBars} from '@fortawesome/free-solid-svg-icons'


function Nav(){
    
    const [genreMenu, setGenreMenu] = useState(false);

    // useState para responsive menu

    const [resMenu, setResMenu] = useState(false);
    
    return ( 
            
            <div>
                <div className="Navigation">
                    <Logo/>
                    <ul className={(resMenu === false && window.screen.width < 769) ? "nav-list-hide" :"nav-list" }>
                        <li className="nav-item">Inicio</li>
                        <li id="nav-item-genre" 
                            className="nav-item" 
                            onMouseEnter={() => setGenreMenu(!genreMenu)} 
                            onMouseLeave={() => setGenreMenu(false)}>
                            Géneros <FontAwesomeIcon icon={faAngleDown}/>
                            <GenreMenu stateMenu={genreMenu}/>
                        </li>
                        <li className="nav-item">Películas</li>
                        <li className="nav-item">Series</li>
                    </ul>
                    <ul className={(resMenu === false && window.screen.width < 769) ? "nav-list-hide" :"nav-list" }>
                        <Search li= {<FontAwesomeIcon icon={faSearch}/>} />
                    </ul>

                    <div onClick={() => setResMenu(!resMenu)} className="responsive-menu-icon">
                        <FontAwesomeIcon icon={faBars}/>
                    </div> 
                </div>
                <SliderHead/>
            </div>
    );
}

export default Nav;