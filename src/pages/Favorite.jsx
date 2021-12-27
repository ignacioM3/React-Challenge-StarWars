import React from 'react'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

function Favorite() {

    const initialState = 0;
    const { favorites } = useSelector(state => state.favoriteReducer)

    return (
        <main>
            <h2 className='page'> Favorites</h2>
            <div class="container-card">
                <div class="row">
                    {
                        favorites.map((product, index) =>
                            <Card key={index}
                                name={product.name}
                                diameter={product.diameter}
                                climate={product.climate}
                                terrain={product.terrain}
                                initialState={initialState}
                            />
                        )

                    }
                </div>
            </div>

        </main>
    )
}

export default Favorite
