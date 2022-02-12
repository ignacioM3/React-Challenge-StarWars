import React from 'react'
import { useSelector } from 'react-redux'
import PlanetCard from '../components/PlanetCard'

function Favorite() {

    const { favorites } = useSelector(state => state.favoriteReducer)

    return (
        <main>
            <h2 className='page'> Favorites</h2>
            <div class="container-card">
                <div class="row">
                    {
                        favorites.map((planet) =>
                            <PlanetCard key={planet.created} {...planet}/>
                        )
                    }
                </div>
            </div>

        </main>
    )
}

export default Favorite
