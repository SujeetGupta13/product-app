// action creators, helper function, create and return

import * as ActionTypes from "./action-types";

export function addItem(item) {

    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            item: item
        }
    }
}

export function removeItem (id) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            id: id
        }
    }
}

export function updateItem (id, qty) {
    return {
        type: ActionTypes.UPDATE_ITEM,
        payload: {
            id, //es6 sugar
            qty
        }
    }
}

export function emptyCart () {
    return {
        type: ActionTypes.EMPTY_CART
    }
}


export function initProducts(products){
    return {
        type: "INIT_PRODUCTS",
        payload: {
            products: products
        }
    }
}

export function loading(status){
    return {
        type: "LOADING",
        payload: {
            status: status
        }
    }
}
//return a function as action
export function fetchProducts() {
    //TODO async read
    return function(dispatch){ 
         console.log("Called by thunk");
         window.fetch("http://g3.nodesense.ai:7070/api/products")
          .then ( response => response.json())
          .then (products => {
              console.log("got products");
              let action = initProducts(products);
              dispatch(action)
          })
    }
}
