import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../actions/favorite'

function Card({name,climate,terrain,diameter}) {
    const dispatch = useDispatch()
    
    const handleAddFavorite = () => {
        dispatch(addFavorite(name, climate, terrain, diameter))
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
                            <p>Diametro: {diameter}</p>
                            <p>Clima: {climate}</p>
                            <p>Terreno: {terrain}</p>
                        </div>
                        {/* card info end  */}
                    </div>
                    {/* button for cards  */}
                    <div className="button-card cursor shoe"  >
                        <h3 className="text-uppercase" onClick={handleAddFavorite}>Agregar a Favorito</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
