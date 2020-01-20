import * as React from 'react';
import { TipserElement, Product, Collection, Store } from '@tipser/tipser-elements';
import { Header } from '../components/header';
import { Footer } from '../components/Footer/footer';

export class ComponentsView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* Inserting a product using the productId as prop */}
                    <h2 className="heading">Product</h2>
                    <Product productId="5c8c3cb257b6a30001357db7" />

                    {/* Inserting a collection using the collectiontId as prop */}
                    <h2 className="heading">Collection</h2>
                    <Collection collectionId="5b1a709d9d25800ff0e9a314" />

                    {/* Inserting Store element */}
                    <h2 className="heading">Store</h2>
                    <Store />
                </main>
                {/* Inserting a custom footer */}
                <Footer />
            </React.Fragment>
        );
    }
}
