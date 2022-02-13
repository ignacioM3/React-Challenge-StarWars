import { types } from "../types/types";

const initialState = {
    search: {
        result: [],
        keywords : ""
    },
    favorites:  JSON.parse(localStorage.getItem("favorite")) 
}


export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.addFavorite:           
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case types.removeFavorite:
            return{
                ...state,
                favorites: state.favorites.filter(planet => planet.name !== action.payload.name)
            }
        case types.searchPlanets: 
            return{
                ...state,
                search : action.payload
            }
        default:
            return state
    }
}