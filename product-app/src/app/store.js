import {createStore, combineReducers, 
    applyMiddleware} from 'redux';

import cartReducer 
    from './redux-cart/state/cartReducer';

import productReducer from './redux-cart/state/ProductReducer';

import thunk from "redux-thunk";

function loggerMiddleware(store) {
    return function(nextFn) {
            return function(action) {
                    console.log("Logger Middleware ", action);
                    // if (action.type == 'CART.EMPTY_CART')
                    //         return false;

                    // if (typeof action == 'function') {
                    //         action(store.dispatch);
                    //         return true;
                    // }

                   let result = nextFn(action)
                   return result;
            }
    }
}
// const store = createStore(cartReducer);

const rootReducer = combineReducers({
    items: cartReducer,
    productState: productReducer
    //counter: counterReducer
});

const store = createStore(rootReducer, 
                      applyMiddleware(loggerMiddleware, thunk));

export default store;