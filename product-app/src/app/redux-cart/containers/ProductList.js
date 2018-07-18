
import {connect} from "react-redux";
 
import ProductList from "../components/ProductList";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         products: state.productState.products,
         status: state.productState.status, //loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       fetchProducts: function() {
           let actionFn = actions.fetchProducts();
           
           dispatch(actionFn);
       }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)