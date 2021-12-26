import { types } from "../types/types";

export const addFavorite = (name, climate, terrain, diameter) =>{
    return (dispatch) =>{
        dispatch(favoriteAdd(name, climate, terrain, diameter))
    }
}

export const favoriteAdd = (name, climate, terrain, diameter) =>({
    type: types.addFavorite,
    payload: {
        name,
        climate,
        terrain,
        diameter
    }
})