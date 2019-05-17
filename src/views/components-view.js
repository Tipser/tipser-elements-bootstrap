import * as React from 'react';
import { TipserElement, TipserProduct, CartIcon, CollectionComponent, ShopComponent } from '@tipser/tipser-elements';
import {Header } from '../components/header';
import {Footer } from '../components/footer';

export class ComponentsView extends React.Component {

    render() {
        return <React.Fragment>
            <Header/>
            <main>
                {/* Inserting an elment from Contentful taking the content Id as the prop. This example renders a page, consisting of other components */}
                <TipserElement id="5Q9hLviOxsOL7UdV0eFkLc" />
            </main>
            {/* Inserting a custom footer */}
            <Footer/>
        </React.Fragment>
    }
}
