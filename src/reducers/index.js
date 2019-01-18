import { combineReducers } from 'redux'
import Products from './products'
import Basket from './basket'

export default combineReducers({
  products: Products,
  basket: Basket,
})