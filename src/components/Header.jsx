import React from 'react'
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { search } from '../actions/favorite';
import useForm from '../hooks/useForm'

function Header() {
    const [{keywords}, handleInputChange, reset] = useForm({
        keywords: "",
    })

    const navigate = useNavigate()
    const dispatch = useDispatch() 

    const handleSearch = (e) =>{
        e.preventDefault()
        if(keywords !== ""){
            dispatch(search(keywords));
            reset()
            navigate("/result")
        }
    }

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
            {/* <form className="input-conteiner" onSubmit={handleSearch}>
                <input type="search" name="keywords" onChange={handleInputChange} value={keywords} />
                <button type="submit"><i className="fas fa-search"></i></button>
            </form> */}
            <form className="search-form-desktop" onSubmit={handleSearch} >
                    <div className='search-bar'>
                        <input type="search" name="keywords" placeholder='Search' onChange={handleInputChange} value={keywords} />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </form>
        </header>
    )
}

export default Header
