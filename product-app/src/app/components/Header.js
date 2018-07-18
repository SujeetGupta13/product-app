import React from "react";

import {NavLink} from 'react-router-dom'

import store from "../store";
import * as actions from "../redux-cart/state/actions";
//just example  to learn redux api
// prod appps sholud use react-redux pkg

//2 types of comoponents, class and functional components.
// react create instance for class components
//then calls inst.render() to get v.dom
export default class Header extends React.Component {

    constructor() {
        super(); // must be
    }

    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
    }
    let action = actions.addItem(item);
    store.dispatch(action);
}

emptyCart = () => {
   // let action = actions.emptyCart();
    store.dispatch(actions.emptyCart());
}

componentDidMount() {
    store.subscribe ( () => {
        console.log("HEADER SUBs");
        this.forceUpdate();
    })
}

    render() {

        //props-react keyword

        let state = store.getState();
        let items = state.items;

        //this.props.title = "test" it woill give error
        return (<div>
            <h2> {this.props.title}  Product App </h2>

            <NavLink to="/" className="button" exact activeClassName="success"> Home </NavLink>
            
            <NavLink to="/cart" className="button" activeClassName="success"> Cart [{items.length}] </NavLink>
            <NavLink to="/redux-cart" className="button" activeClassName="success"> Redux Cart [{items.length}] </NavLink>
            <NavLink to="/about" className="button" activeClassName="success"> About </NavLink>
            <NavLink to="/products" className="button" activeClassName="success"> Products </NavLink>
            <NavLink to="/contact/India" className="button" activeClassName="success"> India </NavLink>
            <NavLink to="/contact/USA" className="button" activeClassName="success"> USA </NavLink>

            <button onClick= {this.addItem}>
                Add Item
            </button>

            <button onClick= {this.emptyCart}>
                Empty Cart
            </button>
            <hr/>
        </div> )
             
    }
}