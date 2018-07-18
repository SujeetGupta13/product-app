import React from "react";

import {NavLink} from 'react-router-dom'

//2 types of comoponents, class and functional components.
// react create instance for class components
//then calls inst.render() to get v.dom
export default class Header extends React.Component {

    constructor() {
        super(); // must be
    }

    render() {

        //props-react keyword


        //this.props.title = "test" it woill give error
        return (<div>
            <h2> {this.props.title}  Product App </h2>

            <NavLink to="/" className="button" exact activeClassName="success"> Home </NavLink>
            
            <NavLink to="/cart" className="button" activeClassName="success"> Cart </NavLink>
            <NavLink to="/about" className="button" activeClassName="success"> About </NavLink>
            <NavLink to="/contact/India" className="button" activeClassName="success"> India </NavLink>
            <NavLink to="/contact/USA" className="button" activeClassName="success"> USA </NavLink>
            <hr/>
        </div> )
             
    }
}