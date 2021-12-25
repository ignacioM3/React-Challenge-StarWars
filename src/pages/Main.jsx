import React, {useState} from 'react'
import Card from '../components/Card'
import '../styles/main.css'
import useFetchPlanets from '../hooks/useFetchPlanets'
import Number from '../components/Number'





function Main() {

    const [number, setNumber] = useState(1)

    let url = `https://swapi.dev/api/planets/?page=${number}`

    const { planets, loading } = useFetchPlanets(url)

    const handleNext = () =>{
        if(number !== 6){
            setNumber(number + 1)
        }
        else{
            setNumber(1)
        }
        
    }

    const handlePrevious = () =>{
        if( number !== 1){
            setNumber(number - 1)
        }else{
            setNumber(6)
        }
    }


    let pag = [1, 2, 3, 4, 5, 6]
    return (
        <main>
            <h5 class="mg-10 tit">Planetas</h5>
            <h2 className='page'> Pagina {number}</h2>
            <div class="container-card">
                <div class="row">
                    {
                        loading ?
                            (
                                <p className='loading'>Cargando</p>
                            )
                            : (
                                planets.map((product, index) =>
                                    <Card key={index}
                                        name={product.name}
                                        diameter={product.diameter}
                                        climate={product.climate}
                                        terrain={product.terrain}
                                    />
                                )
                            )
                    }
                </div>
            </div>
            <div className='pagination'>
                <button className="button" onClick={handlePrevious}>Previous</button>
                {
                    pag.map((pag, index) => <Number key={index} num={pag} setNumber={setNumber}/>)
     
                }
                <button className='button next' onClick={handleNext} >Next</button>
            </div>

        </main>
    )
}

export default Main
