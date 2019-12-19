import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { createHashHistory } from 'history';
import { TipserElementsProvider } from '@tipser/tipser-elements';

import { ComponentsView } from './views/components-view';
import { ProductView } from './views/product-view';
import { NotFoundView } from './views/not-found-view';
import { PageView } from './views/page-view';

import '@tipser/tipser-elements/dist/index.css';
import './App.css';


const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

let tipserConfig = {
    lang: 'en',
    env: 'dev',
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
            <TipserElementsProvider posId={'59e86b79b8f3f60a94ecd26a'} config={tipserConfig} sentryEnv="frontend_dev">
                <BrowserRouter history={hashHistory}>
                    <Switch>
                        <Route path="/product/:productId" component={ProductView}/>
                        <Route path="/page/:pageId" component={PageView}/>
                        <Route path="/" component={ComponentsView}/>
                        <Route component={NotFoundView}/>
                    </Switch>
                </BrowserRouter>
            </TipserElementsProvider>
        );
    }
}

export default App;
