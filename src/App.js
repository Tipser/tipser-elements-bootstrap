import React, { Component } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { TipserElementsProvider } from '@tipser/tipser-elements';
import { ComponentsView } from './views/components-view';
import { ProductView } from './views/product-view';
import { NotFoundView } from './views/not-found-view';
import './App.css';
import createHashHistory from 'history/createHashHistory';
    
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

let tipserConfig = {
    lang: 'en',
    primaryColor: 'red',
    useDefaultErrorHandler: true,
    eventsHandlers: {
        onError: (error) => {
            console.log(error)
        }
    }
};

class App extends Component {

    render() {
        return (
            <Router history={hashHistory}>
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
