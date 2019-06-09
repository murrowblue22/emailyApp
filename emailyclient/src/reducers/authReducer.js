import * as types from '../actions/types';

export default function(state = null, action) {
    
    switch (action.type) {
        case types.FETCH_USER:
            return action.payload || false; 
        case types.LOGOUT:
            return false; 
        case types.LOGIN:
            return true; 
        default: 
            return state; 
    }
}