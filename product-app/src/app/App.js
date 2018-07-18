import React, {Component} from 'react';

import Header from  "./components/Header";
import Footer from  "./components/Footer";
import Home from "./components/Home";
import Cart from "./cart/components/Cart";

import "./App.css"

import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";

import ProductList from "./redux-cart/containers/ProductList";
//import ReduxCart from "./redux-cart/containers/Cart";
import {BrowserRouter as Router,
        Switch, 
        Route
} from 'react-router-dom'


import Loadable from 'react-loadable';

function Loading() {
    return (
        <div> 
            Loading ...
        </div>
    )
}

const ReduxCart = Loadable({
    loader: () => import('./redux-cart/containers/Cart'),
    loading: Loading,
  });

export default class App extends React.Component {

    constructor() {
        super();

        //react keyword, state
        //intialisze state
        //state is owned by component
        //
        this.state = {
            title:  'Product App',
            year: 2018,
            address: {city:'BLR', state:'KA'}
        }

        //BAD
        //this..title= "Product App";
    }
    //react keyword
    //craete and return virtual DOM
    render() {
        // return React.createElement( 'h1', {id:'myh'}, 'Welcome to React');

        //jsx code insatead of upper code
        return (
            <Router>
            <div>
                {/* <Header title ="Product App"/> */}
                <Header title = {this.state.title}/>
                <h1 id= 'myh'>Welcome to React</h1>

                {/* <Cart></Cart>

                <Home/> */}

                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Cart" component={Cart} />
                <Route path="/redux-cart" component={ReduxCart} />
                <Route path="/products" component={ProductList} />
                <Route path="/about" component={About} />
                <Route path="/contact/:country" component={Contact} />
                <Route path="*" component={NotFound} />
                </Switch>
                {/* <Footer title="Product App" year={2018}/> */}
                <Footer title = {this.state.title}
                   year = {this.state.year}
                   address = {this.state.address}>

                   {/*content view*/}
                   <p>Contact Time: 9:00 AM to 5:30 PM</p>
                   <p>US Time: 8:00 AM to 5:00 PM</p>
                   </Footer>
            </div>
            </Router>
        )
    }
}


//https://gist.github.com/gopalakrishnan-subramani/473ee052d1725cf406847a00202a1e87