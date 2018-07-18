import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import * as actions from "../state/actions";
import CartItem from '../components/CartItem';

function mapDispatchToProps(dispatch){

    return {
        //TODO

        actions: bindActionCreators(actions, dispatch)
    }
}

export  default connect(null,mapDispatchToProps)(CartItem)