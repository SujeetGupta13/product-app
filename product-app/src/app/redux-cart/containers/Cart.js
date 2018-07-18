
import {connect} from "react-redux";

import Cart from "../components/Cart";
import * as actions from "../state/actions";

import {bindActionCreators} from "redux";

// retrun fn as props
//these props are passed to cart compnent
function mapDispatchToProps(dispatch) {
    return {
        //Prop Name: function(){}
        addItem: function(){
            let id = Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
        }
        let action = actions.addItem(item);
        dispatch(action);
    
        },

        empty: bindActionCreators(actions.emptyCart, dispatch)
        // can be replaced bt bindActionCreators
        // empty: function() {
        //     dispatch(actions.empty())
        // }

    }
}

// returns props as a data 
function mapStateToProps (state){
    return {
        //propName: value from state
        cartLength: state.items.length
    }
}

let connectFn = connect(mapStateToProps, mapDispatchToProps);

//create and return container component,
//container wraps Cart component
let CartContainer = connectFn(Cart);

export default CartContainer;





