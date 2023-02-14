import { 
    LOGIN_USER,
    REGISTER_USER,
    INSERT_BOARD
} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
        case REGISTER_USER:
            return{...state, joingSuccess: action.payload }
        case INSERT_BOARD:
                return{...state, insertSuccess: action.payload }
            break;
    
        default:
            return state;
    }
} 