import { ADD_BASKET, REMOVE_BASKET, RESET_BASKET } from "./types"


export const addBasket = (data) => dispatch => {
    try {
        dispatch({ type: ADD_BASKET, payload: data})
      } catch(e) {
        console.log(e);
      }
}

export const removeBasket = (data) => async dispatch => {
    dispatch({ type: REMOVE_BASKET, payload: data})
}

export const resetBasket = () => async dispatch => {
    dispatch({ type: RESET_BASKET, payload: []})
}
