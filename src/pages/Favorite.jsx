import React from 'react'
import { useSelector } from 'react-redux'
import CardFavorite from '../components/CardFavorite'

function Favorite() {

    const { favorites } = useSelector(state => state.favoriteReducer)

    return (
        <main>
            <h2 className='page'> Favorites</h2>
            <div class="container-card">
                <div class="row">
                    {
                        favorites.map((product, index) =>
                            <CardFavorite key={index}
                                name={product.name}
                                diameter={product.diameter}
                                climate={product.climate}
                                terrain={product.terrain}
                            />
                        )

                    }
                </div>
            </div>

        </main>
    )
}

export default Favorite
