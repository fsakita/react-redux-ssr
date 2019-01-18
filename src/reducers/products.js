import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../action/types'

const INITIAL_STATE = {
  isFetching: true
};

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_PRODUCTS: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_PRODUCTS: {
      return { ...state, isFetching: false, ...action.payload }
    }
    default: return state
  }
}