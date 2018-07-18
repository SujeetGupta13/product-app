import {connect} from 'react-redux';

import CartSummary from '../components/CartSummary';

function mapStateToProps(state){
    return {
        //TODO
        count: 0,
        amount: 0
    }
}

export default connect(mapStateToProps, null)(CartSummary)