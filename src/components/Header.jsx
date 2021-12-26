import React from 'react'
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header>
            <Link to="/">
                <img className="img-logo" src="/images/1280px-Star_Wars_Logo.svg.png" alt="" />
            </Link>
            <nav className="nav__links">
                <ul >
                    <li><Link to="/">Planets <i className="fas fa-globe-americas"></i></Link></li>
                    <li><Link to="/favorite">Favorite <i className="far fa-bookmark"></i></Link></li>
                </ul>
            </nav>
            <from className="input-conteiner">
                <input type="text" />
                <button type="submit"><i className="fas fa-search"></i></button>
            </from>
        </header>
    )
}

export default Header
