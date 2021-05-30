import React from 'react';
import Database from './dataBase.json';
import Card from './card';
import Subtittle from './subtittle';

// Declaracion del componente

function MovieList(){
    
    // Mediante el metodo map() recorremos el archivo dataBase.json
    // Separamos las peliculas de las series con un condicional booleano llamando a la clave "movie"
    // Pintamos las peliculas en el DOM
    
    return (
        <div> 
            <Subtittle subtittle="Películas más vistas"/>
            <ul className="movie-serie-list">
           
                {Database.map(({img, id, name, movie, year, duration}) => {
                 
                    if(movie === true){
                        return <Card name={name} key={id} img={img} year={year} duration={duration}/>
                      
                            }

                        
                        }   
                    )
                };
        
            </ul>
        </div>
        
    )
}

export default MovieList;