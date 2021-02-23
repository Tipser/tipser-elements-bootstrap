import * as React from 'react';
import { Product } from '@tipser/tipser-elements';

import { Header } from '../components/header';
import { Footer } from '../components/Footer/footer';

export const ProductView = (props) => {
    const { productId } = props.match.params;

    return (
        <React.Fragment>
            <Header />
            <main>
                <div className="container">
                    <h3>Product</h3>
                    <Product productId={productId} />
                    <h3>Product card</h3>
                    <Product productId={productId} renderer="card" />
                    <h3>Product Compact</h3>
                    <Product productId={productId} viewMode="compact" />
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
};
