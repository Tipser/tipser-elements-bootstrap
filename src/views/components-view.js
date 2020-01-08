import * as React from 'react';
import { TipserElement, Product, Collection, Store } from '@tipser/tipser-elements';
import { Header } from '../components/header';

export class ComponentsView extends React.Component {
    render() {
        const styleMedium = {
            width: '980px',
            margin: '0 auto',
            border: '1px dashed lightgray',
        };

        const styleSmall = {
            width: '767px',
            margin: '0 auto',
            border: '1px dashed lightgray',
        };

        const styleXS = {
            width: '400px',
            margin: '0 auto',
            border: '1px dashed lightgray',
        };

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* Inserting a product using the productId as prop */}
                    <h2>Product component</h2>
                    <br />
                    <h3>Full width product view</h3>
                    <Product productId="5c8c3cb257b6a30001357db7" />

                    <div style={styleMedium}>
                        <h3>Container width 980px</h3>
                        <Product productId="5c8c3cb157b6a30001357da9" />
                    </div>
                    <div style={styleSmall}>
                        <h3>Container width 767px</h3>
                        <Product productId="5c8c3cb157b6a30001357da9" />
                    </div>
                    <div style={styleXS}>
                        <h3>Container width 400px</h3>
                        <Product productId="5c8c3cb157b6a30001357da9" />
                    </div>

                    {/* Inserting an elment from Contentful taking the content Id as the prop */}
                    {/*This example renders a page consisting of other components*/}
                    {/*<h2>Contentful element</h2>*/}
                    {/*<TipserElement id="1larHZb8TeMQiqmi4W8CIS" />*/}

                    {/* Inserting a collection using the collectiontId as prop */}
                    <h2>Collection component</h2>
                    <Collection collectionId="5b1a709d9d25800ff0e9a314" />

                    {/* Inserting Store element */}
                    <h2>Store</h2>
                    <Store />
                </main>
                {/* Inserting a custom footer */}
                <footer>
                    <div className="footer-text">This is the footer</div>
                </footer>
            </React.Fragment>
        );
    }
}
