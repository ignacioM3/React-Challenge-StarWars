import React from 'react'
import { useSelector } from 'react-redux'
import PlanetCard from '../components/PlanetCard'
import '../styles/main.css'


export const Result = () => {
    const { result, keywords } = useSelector(state => state.favoriteReducer.search)

    const { favorites } = useSelector(state => state.favoriteReducer)


    return (
        <div>
            <h2 className='page2' >Result of your search: {keywords}</h2>
            <div>
                <div class="container-card">
                    <div class="row">



                        {
                            result.length === 0 ?
                                <h2 className='page2 error-msg'>There are no planets that match your search</h2>
                                :
                                result.map((planet) => {
                                    /* for (let i = 0; i < favorites.length; i++) {
                                        if (favorites[i].name === planet.name) {
                                            planet.favorite = false
                                        }
                                    } */
                                    return <PlanetCard key={planet.create} {...planet} />

                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
