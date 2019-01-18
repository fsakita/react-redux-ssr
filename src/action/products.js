import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from "./types"
import { TyreService } from '../services'

export const fetchProducts = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_PRODUCTS })
    TyreService.getTyres((tyres) => {
      dispatch({ type: RECEIVE_PRODUCTS, payload: tyres})
    })
  } catch(e) {
    console.log(e)
    dispatch({ type: RECEIVE_PRODUCTS, payload: [] })
  }
}