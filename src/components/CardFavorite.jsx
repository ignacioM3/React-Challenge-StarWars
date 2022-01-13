import React from 'react'
import { useDispatch } from 'react-redux'
import {  deleteFavorite } from '../actions/favorite'


function CardFavorite({ name, climate, terrain, diameter}) {


    const dispatch = useDispatch()


    const handleDeleteFavorite = () => {
        dispatch(deleteFavorite({ name, climate, terrain, diameter }))   
    }


    return (
        <div>
            <div className="col-md-4">
                <div className="card">
                    <div className="product">
                        <img src={`/assets/images/planets/${name}.png`} alt="" className="rounded"
                            width="160" />
                        <h5 className='name-planets'>
                            {name}
                        </h5>
                        {/*  card info */}
                        <div className='info'>
                            <p>Diameter: {diameter}</p>
                            <p>Climate: {climate}</p>
                            <p>Terrain: {terrain}</p>
                        </div>
                        {/* card info end  */}
                    </div>
                    {/* button for cards  */}
                    <div className="button-card cursor shoe" onClick={handleDeleteFavorite} >
                        <h3 className="text-uppercase-delete" >Delete to Favorite</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFavorite
