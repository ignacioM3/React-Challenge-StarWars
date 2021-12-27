import { types } from "../types/types";

export const addFavorite = (favorite) => ({
    type: types.addFavorite,
    payload: favorite
})


export const deleteFavorite = (deleteResult) =>({
    type: types.removeFavorite,
    payload: deleteResult
})

export const search = (keywords) =>{
    return async (dispatch) =>{
        try {
            const response = await fetch(`https://swapi.dev/api/planets/?search=${keywords}`);
            const data = await response.json()
            console.log(data)
            dispatch(showResult({
                result: data.results,
                keywords,
            }))
            
        } catch(error){
            console.log(error)
        }
    }
}

export const showResult = (data) =>({
    type: types.searchPlanets,
    payload: data
})