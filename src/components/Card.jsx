import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, deleteFavorite } from '../actions/favorite'

function Card({ name, climate, terrain, diameter, initialState }) {
    const dispatch = useDispatch()

    const [buttonFavorite, setButton] = useState(initialState)

    const handleAddFavorite = () => {
        dispatch(addFavorite({ name, climate, terrain, diameter }))
        setButton(0)
        
    }

    const handleDeleteFavorite = () => {
        setButton(1)
        dispatch(deleteFavorite({ name, climate, terrain, diameter }))
        
    }


    return (
        <div>
            <div className="col-md-4">
                <div className="card">
                    <div className="product">
                        <img src={`/images/planets/${name}.png`} alt="" className="rounded"
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
                    {
                        buttonFavorite === 1?
                            <div className="button-card cursor shoe" onClick={handleAddFavorite} >
                                <h3 className="text-uppercase" >Add to Favorite</h3>
                            </div>
                            :
                            <div className="button-card cursor shoe"  onClick={handleDeleteFavorite} >
                                <h3 className="text-uppercase-delete" >Delete to Favorite</h3>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Card
