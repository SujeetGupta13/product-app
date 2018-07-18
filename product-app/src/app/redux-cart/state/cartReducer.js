
import * as ActionTypes from "./action-types";

const INITIAL_STATE = []
export default function cartReducer( state= INITIAL_STATE, action) {

    console.log("CartReducer ", state, action);

    switch(action.type){
        case ActionTypes.ADD_ITEM:
            return [...state, action.payload.item]

        case ActionTypes.REMOVE_ITEM:
            return state.filter( item => item.id != action.payload.id);   

        case ActionTypes.UPDATE_ITEM:
            return state.map ( item => {
                if (item.id == action.payload.qty) {
                    return {...item, qty: action.payload.qty}
                }
                return item;
            })
            
        case ActionTypes.EMPTY_CART:
             return INITIAL_STATE
             
        default:
           return state;     
    }

}