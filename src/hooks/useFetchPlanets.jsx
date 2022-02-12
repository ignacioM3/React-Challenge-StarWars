import {useState, useEffect} from 'react'

function useFetchPlanets(url) {

    const [state, setState] = useState({
        loading: true,
        planets: null,
        count: 0
    })
    useEffect(() =>{
        setState({
            loading: true,
            planets: null,
            count: 0
        })

        fetch(url)
        .then(response => response.json())
        .then(planets => {
                setState({
                    loading: false,
                    planets: planets.results,
                    count: planets.count
                })
        })

    }, [url])


    return state
}

export default useFetchPlanets
