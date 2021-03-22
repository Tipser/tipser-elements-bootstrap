import * as React from 'react';
import { Product, Collection, Store } from '@tipser/tipser-elements';
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
                    <Product productId="603fbfb05d24f81b603f8276" viewMode={"compact"} />

                    {/* Inserting a collection using the collectiontId as prop */}
                    <h2 className="heading">Collection</h2>
                    <Collection collectionId="5b1a709d9d25800ff0e9a314" />

                    {/* Inserting a collection with a carousel */}
                    <h2 className="heading">Collection with carousel</h2>
                    <Collection collectionId="5b9665929d25800a1c9b6b34" carousel />
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
