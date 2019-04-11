import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { TipserElementsProvider } from '@tipser/tipser-elements';
import { ComponentsView } from './views/components-view';
import { ProductView } from './views/product-view';
import './App.css';

let tipserConfig = {
    lang: 'en',
    primaryColor: 'red'
};

class App extends Component {

    render() {
        return (
            <Router>
                <TipserElementsProvider
                    posId={"5075d7715c3d090a90585e87"}
                    config={tipserConfig}>
                    <Route exact path="/product/:productId" component={ProductView} />
                    <Route exact path="/" component={ComponentsView} />
                </TipserElementsProvider>
            </Router>
        );
    }

}

export default App;
