import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { search } from '../actions/favorite';
import useForm from '../hooks/useForm'

const imagesPath = require.context('../assets/images')


function Header() {


    const [searchDrop, setSearch] = useState(false)
    const [burger, setBurger] = useState(false)

    const handleDropSearch = () => {
        if (searchDrop === false) {
            setSearch(true)
        } else {
            setSearch(false)
        }
    }
    const handleBurgerMenu = () => {
        if (burger === false) {
            setBurger(true)
        } else {
            setBurger(false)
        }
    }

    const [{ keywords }, handleInputChange, reset] = useForm({
        keywords: "",
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        if (keywords !== "") {
            dispatch(search(keywords));
            reset()
            navigate("/React-Challenge-StarWars/result")
        }
    }

    return (
        <header >
            <div className='header'>
                <Link to="/React-Challenge-StarWars">
                    <img className="img-logo" src={imagesPath("./1280px-Star_Wars_Logo.svg.png")} alt="" />
                </Link>
                <nav className="nav__links">
                    <ul >
                        <li><Link to="/">Planets <i className="fas fa-globe-americas"></i></Link></li>
                        <li><Link to="/React-Challenge-StarWars/favorite">Favorite <i className="far fa-bookmark"></i></Link></li>
                    </ul>
                </nav>
                <form className="search-form-desktop" onSubmit={handleSearch} >
                    <div className='search-bar'>
                        <input type="search" name="keywords" placeholder='Search' onChange={handleInputChange} value={keywords} />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <i className="fas fa-bars burguer-menu-icon display-mobile" onClick={handleBurgerMenu}></i>

                {/*  Icono del buscador en header mobile  */}
                <div className="search-icon display-mobile" onClick={handleDropSearch}>
                    <i className="fas fa-search"></i>
                </div>

                {/*  Buscador mobile  */}

                {
                    searchDrop &&
                    <form className="search-form-mobile display-mobile" id="search" onSubmit={handleSearch} >
                        <div className="search-bar mobile">
                            <input type="search" name="keywords" placeholder="Searech" onChange={handleInputChange} value={keywords} />
                            <button type="submit"><i className="fas fa-search"></i></button>
                        </div>
                    </form>
                }


            </div>
            {/* <!-- Menú de navegación mobile--> */}
            {
                burger &&
                <nav className="navigation-bar display-mobile" id="navigation-bar-mobile">
                    <ul className="menu-contenedor">
                        <Link to="/React-Challenge-StarWars">
                            <li className="dropdown-menu li-desplegable" > Planets <i className="fas fa-globe-americas"></i></li>
                        </Link>
                        <Link to="/React-Challenge-StarWars/favorite">
                        <li className="dropdown-menu li-desplegable">Favorites <i className="far fa-bookmark"></i></li>
                        </Link>
                        
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Header
