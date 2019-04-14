import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { TipserElementsProvider } from '@tipser/tipser-elements';
import { ComponentsView } from './views/components-view';
import { ProductView } from './views/product-view';
import { NotFoundView } from './views/not-found-view';
import './App.css';

let tipserConfig = {
    lang: 'en',
    primaryColor: 'red'
};

class App extends Component {

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <TipserElementsProvider
                    posId={"5075d7715c3d090a90585e87"}
                    config={tipserConfig}>
                    <Switch>
                        <Route path="/product/:productId" component={ProductView} />
                        <Route path="/" component={ComponentsView} />
                        <Route component={NotFoundView} />
                    </Switch>
                </TipserElementsProvider>
            </Router>
        );
    }

}

export default App;
