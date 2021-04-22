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
                    <Product productId="60479d1fdb3410ad13e28083" viewMode={"compact"} />
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}
