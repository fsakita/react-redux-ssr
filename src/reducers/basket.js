import { ADD_BASKET, REMOVE_BASKET, RESET_BASKET } from '../action/types'

const INITIAL_STATES = {
  tyres: []
}

export default(state = INITIAL_STATES, action) => {
  switch(action.type) {
    case ADD_BASKET: {
        let newState = state.tyres
        const index = newState.findIndex((obj => obj.id == action.payload.id))
        if(index === -1) {
            return { ...state, tyres: [...state.tyres, action.payload] }
        } else {
            newState[index].qty += 1
            return { ...state, tyres: [...newState] }
        }

    }

    case REMOVE_BASKET: {
        let newState = state.tyres
        const index = newState.findIndex((obj => obj.id == action.payload.id))
        if(newState[index].qty <= 1){
            newState.splice(index, 1)
        } else {
            newState[index].qty -= 1
        }
        return { ...state, tyres: [...newState] }
    }
    
    case RESET_BASKET: {
        return { tyres: [] }
    }
    default: return state
  }
}