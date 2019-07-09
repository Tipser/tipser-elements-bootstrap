import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { TipserElementsProvider } from '@tipser/tipser-elements';
import { ComponentsView } from './views/components-view';
import { ProductView } from './views/product-view';
import { NotFoundView } from './views/not-found-view';
import './App.css';
import { createHashHistory } from 'history';
import { PageView } from './views/page-view';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

let tipserConfig = {
    lang: 'en',
    primaryColor: 'red',
    useDefaultErrorHandler: true,
    eventsHandlers: {
        onError: error => {
            console.log(error);
        },
        onAddToCart: ({ cartSize, product }) => {
            console.log('Hurray, you have added item to cart. ', product);
            console.log('Your cart size is now. ', cartSize);
        },
    },
};

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <TipserElementsProvider posId={'59f1ef63b8f3f6727cef1d34'} config={tipserConfig}>
                    <Switch>
                        <Route path="/product/:productId" component={ProductView} />
                        <Route path="/page/:pageId" component={PageView} />
                        <Route path="/" component={ComponentsView} />
                        <Route component={NotFoundView} />
                    </Switch>
                </TipserElementsProvider>
            </Router>
        );
    }
}

export default App;
