import React, { useState } from 'react'
import PlanetCard from '../components/PlanetCard'
import '../styles/main.css'
import useFetchPlanets from '../hooks/useFetchPlanets'
import Number from '../components/Number'
import { useSelector } from "react-redux";
import { useEffect } from 'react'

function Main() {

    const [number, setNumber] = useState(1)
    
    const {favorites} = useSelector((state) => state.favoriteReducer)

  
    useEffect(() => {
      localStorage.setItem('favorite', JSON.stringify(favorites))
   }, [favorites]);

    let url = `https://swapi.dev/api/planets/?page=${number}`

    const { planets, loading, count } = useFetchPlanets(url)

    const countPages = count / 10;
    const pages = []

    for(let i = 1; i <= countPages; i++){
        pages.push(i)
    }

    const handleNext = () => {
        if (number !== countPages) {
            setNumber(number + 1)
        }
        else {
            setNumber(1)
        }

    }

    const handlePrevious = () => {
        if (number !== countPages) {
            setNumber(number - 1)
        } else {
            setNumber(6)
        }
    }


    return (
        <main>
            <h2 className='page'> Pages {number}</h2>
            <div class="container-card">
                <div class="row">
                    {
                        loading ?
                            (
                                <p className='loading'>Loading</p>
                            )
                            : (
                                 planets.map((planet) => {
                                  /* for (let i = 0; i < favorites.length; i++) {
                                    if(favorites[i].name === planet.name){
                                      planet.favorite = false;
                                    }
                                  } */
                                  return  <PlanetCard key={planet.created}{...planet}/>
                                }) 
                              )
                    }
                </div>
            </div>
            <div className='pagination'>
                <button className="button" onClick={handlePrevious}><i class="fas fa-angle-double-left"></i></button>
                {
                    pages.map((pag, index) => <Number key={index} num={pag} setNumber={setNumber} />)

                }
                <button className='button next' onClick={handleNext} ><i class="fas fa-angle-double-right"></i></button>
            </div>

        </main>
    )
}

export default Main
