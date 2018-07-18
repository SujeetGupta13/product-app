const INITIAL_STATE = {
    products: [],
    status: false
}

export default function productReducer(state = INITIAL_STATE, action) {
    console.log("productReducer ", state, action);
    switch(action.type) {
        case "INIT_PRODUCTS":
            return {...state, products: action.payload.products};

        case "LOADING":
            return {...state, status: action.payload.status};
 
        default:
            return state;
    }
}