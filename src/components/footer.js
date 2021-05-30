import React from 'react';
import Logo from './logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare,faInstagram,faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <div className="footer-container">
            <ul className="footer-list">
                <li id="logo-footer"><Logo/></li>
                <a href="https://www.facebook.com/">
                    <li className="footer-icon">
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                    </li>
                </a>
                <a href="https://www.instagram.com/">
                    <li className="footer-icon">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </li>
                </a>
                <a href="https://twitter.com/">
                    <li className="footer-icon">
                        <FontAwesomeIcon icon={faTwitterSquare}/>
                    </li>
                </a>
            </ul>
            <p id="copyright">© 2019 Dpelis Peliculas Online, Todos los derechos reservados.</p>
        </div>
    )
}


export default Footer;