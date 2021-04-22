import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { TipserElementsProvider, Checkout, TipserLang, TipserEnv ,ModularCheckout, useCheckoutContext} from '@tipser/tipser-elements';

import { ComponentsView } from './views/components-view';
import { ProductView } from './views/product-view';
import { NotFoundView } from './views/not-found-view';
import { PageView } from './views/page-view';
import { ResponsiveProduct } from './views/responsive-product';

import '@tipser/tipser-elements/dist/index.css';
import './App.css';

let tipserConfig = {
    lang: TipserLang.enUS,
    env: TipserEnv.stage,
    primaryColor: '#000000',
    openOldDialog: false,
    enableCheckoutV2: true,
    customUrls: {
        checkoutUrl: '/checkout',
        checkoutConfirmationUrl: '/confirmation',
    },
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

const CustomConfirmationPage = () => {
    const checkoutContext = useCheckoutContext();

    console.log('checkoutContext = ', checkoutContext);

    if (!checkoutContext || !checkoutContext.checkout) {
        return null;
    }
    const { firstName, lastName } = checkoutContext.checkout.deliveryDetails;
    const totalPrice = checkoutContext.checkout.totals.checkout.total.prices.finalPrice.incTax.formatted;
    return (
        <div>
            <div>Your checkout is complete!</div>
            <div>
                Recipient: {firstName} {lastName}
            </div>
            <div>Total price paid: {totalPrice}</div>
        </div>
    );
};

class App extends Component {
    render() {
        return (
            <TipserElementsProvider posId={'5b35f9419d25801a7ce45e03'} config={tipserConfig} >
                <BrowserRouter>
                    <Switch>
                        <Route path="/responsiveness" component={ResponsiveProduct} />
                        <Route path="/product/:productId" component={ProductView} />
                        <Route path="/page/:pageId" component={PageView} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/confirmation">
                            <ModularCheckout>
                                <ModularCheckout.Confirmed>
                                    <CustomConfirmationPage />
                                </ModularCheckout.Confirmed>
                            </ModularCheckout>
                        </Route>
                        <Route path="/" component={ComponentsView} />
                        <Route component={NotFoundView} />
                    </Switch>
                </BrowserRouter>
            </TipserElementsProvider>
        );
    }
}

export default App;
