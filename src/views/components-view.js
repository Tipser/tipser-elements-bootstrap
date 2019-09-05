import * as React from 'react';
import { TipserElement, Product, Cart, Collection, Store } from '@tipser/tipser-elements';
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
                    <h2>Inserting an elment from Contentful taking the content Id as the prop.</h2>
                    <h3>This example renders a page, consisting of other components</h3>
                    
                    <TipserElement id="2OeW1Ab8lKNcUq6dVUh79" />

                    <h2>Inserting a product using the productId as prop</h2>
                    <br/>
                    <h3>Full width product view</h3>
                    <Product productId="5ba2334a781baa0001ccdffc" />

                    <div style={styleMedium}>
                        <h3>Container width 980px</h3>
                        <Product productId="5aafd24f9d25801d54d41132" />
                    </div>
                    <div style={styleSmall}>
                        <h3>Container width 767px</h3>
                        <Product productId="5aafd24f9d25801d54d41132" />
                    </div>
                    <div style={styleXS}>
                        <h3>Container width 400px</h3>
                        <Product productId="5aafd24f9d25801d54d41132" />
                    </div>

                    <h2>Inserting an elment from Contentful taking the content Id as the prop.</h2>
                    <h3>This example renders a page, consisting of other components</h3>

                    <TipserElement id="1larHZb8TeMQiqmi4W8CIS" />
                    <h2>Inserting a collection using the collectiontId as prop</h2>
                    <Collection collectionId="5beaaa0653e83f0001e18577" />
                    <h2>Inserting a collection using the collectiontId as prop</h2>
                    <Collection collectionId="5bec3f0e8d1736000154335a" />
                    <h2>Inserting a collection using the collectiontId as prop</h2>
                    <Collection collectionId="594a228e8aa0ce56d8aaad06" />
                    <h2>Inserting Store element</h2>
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
