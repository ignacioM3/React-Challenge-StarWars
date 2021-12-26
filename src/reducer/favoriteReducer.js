import { types } from "../types/types";

const initialState = {
    favorites: [{}]
}


export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addFavorite:
            console.log(action.payload)
           
            return {
                ...state,
                favorites: [{...action.payload}]
            }

        default:
            return state
    }
}