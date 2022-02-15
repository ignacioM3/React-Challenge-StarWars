import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, deleteFavorite } from '../actions/favorite'
const imagesPath = require.context('../assets/images')


function PlanetCard(props) {

    const { name, climate, terrain, diameter, favorite = true } = props


    const dispatch = useDispatch()
   
    const [buttonFavorite, setButton] = useState(favorite)

    
    const handleClickFavorite = () =>{
        if(buttonFavorite === true){
            const favoritePlanet = {
                ...props,
                favorite: false
            }
            dispatch(addFavorite(favoritePlanet))
            setButton(!buttonFavorite)
        }else{
            const favoritePlanet = {
                ...props,
                favorite: true
            }
            dispatch(deleteFavorite(favoritePlanet))
            setButton(true)

        }

    }
  

    return (
        <div>
            <div className="col-md-4">
                <div className="card">
                    <div className="product">
                        <img  src={imagesPath(`./planets/${name}.png`)}  alt="" className="rounded"
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
                        buttonFavorite ?
                            <div className="button-card cursor shoe" onClick={handleClickFavorite} >
                                <h3 className="text-uppercase" >Add to Favorite</h3>
                            </div>
                            :
                            <div className="button-card cursor shoe"  onClick={handleClickFavorite} >
                                <h3 className="text-uppercase-delete" >Delete to Favorite</h3>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default PlanetCard
