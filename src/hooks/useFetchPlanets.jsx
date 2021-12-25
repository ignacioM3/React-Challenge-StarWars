import {useState, useEffect} from 'react'

function useFetchPlanets(url) {

    const [state, setState] = useState({
        loading: true,
        planets: null
    })
    useEffect(() =>{
        setState({
            loading: true,
            data: null
        })

        fetch(url)
        .then(response => response.json())
        .then(planets => {
                setState({
                    loading: false,
                    planets: planets.results
                })
        })

    }, [url])


    return state
}

export default useFetchPlanets
