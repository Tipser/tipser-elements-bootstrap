import * as React from 'react';
import { Product } from '@tipser/tipser-elements';

import { Header } from '../components/header';
import { Footer } from '../components/Footer/footer';

export class ResponsiveProduct extends React.Component {
    render() {
        const styleMedium = {
            width: '980px',
            margin: '0 auto',
            border: '1px dashed #eae6df',
        };

        const styleSmall = {
            width: '767px',
            margin: '0 auto',
            border: '1px dashed #eae6df',
        };

        const styleXS = {
            width: '400px',
            margin: '0 auto',
            border: '1px dashed #eae6df',
        };

        return (
            <React.Fragment>
                <Header />
                <main>
                    <div className="container">
                        <h2>Full width product view</h2>
                        <Product productId="5b208a40e32bc30ccc161884" />

                        <div style={styleMedium}>
                            <h3>Container width 980px</h3>
                            <Product productId="5c6eb635313a2c00010f51bc" />
                        </div>
                        <div style={styleSmall}>
                            <h3>Container width 767px</h3>
                            <Product productId="5a7a6bd4c0bdfb4ee8521881" />
                        </div>
                        <div style={styleXS}>
                            <h3>Container width 400px</h3>
                            <Product productId="5ca7126d5559a000010050dc" />
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}
