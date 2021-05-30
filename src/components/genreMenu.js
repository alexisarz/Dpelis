import React from 'react';
import SubmenuItem from './submenuItem';

const genre = ["Acción", "Suspenso", "Crimen", "Anime", "Terror", "Ciencia Ficción", "Fantasía", "Comedia"]

function GenreMenu(props){
    return ( 
        <div className={(props.stateMenu) ? 'genre-menu-on' : 'genre-menu-off'}>
            <ul className="genre-submenu-list">
                {genre.map((e) => <SubmenuItem key={e} li={e}/>)}
            </ul>
        </div>
    )
}

export default GenreMenu;