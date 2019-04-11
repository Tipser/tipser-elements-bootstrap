import * as React from 'react';
import { TipserElement, TipserProduct, CartIcon, CollectionComponent, ShopComponent } from '@tipser/tipser-elements';
import logo from '../logo.svg';

export class ComponentsView extends React.Component {

    render() {
        return <React.Fragment>
            <header className="header">
                <nav className="navigation">
                    <ul className="horizontal-menu">
                        <li className="horizontal-item">
                            <img src={logo} className="te-logo" alt="logo" />
                        </li>
                        <li className="horizontal-item">
                            <a
                                className="link"
                                href="https://developers.tipser.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Tipser Developers
                            </a>
                        </li>
                        <li className="horizontal-item">
                            <a
                                className="link"
                                href="https://tipser.github.io/docs/#tipser-elements"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Tipser Elements documentation
                            </a>
                        </li>
                        <li className="horizontal-item">
                            <a
                                className="link"
                                href="https://github.com/Tipser/tipser-elements-react-bootstrap"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub repo of this page
                            </a>
                        </li>
                        <li className="horizontal-item te-cart">
                            {/* Inserting the Tipser cart Icon */}
                            <CartIcon />
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {/* Inserting an elment from Contentful taking the content Id as the prop. This example renders a page, consisting of other components */}
                <TipserElement id="2OeW1Ab8lKNcUq6dVUh79" />

                {/* Inserting a product using the productId as prop  */}
                <TipserProduct productId="5ba2334a781baa0001ccdffc" />

                {/* Inserting an elment from Contentful taking the content Id as the prop. This example renders a page, consisting of other components */}
                <TipserElement id="1larHZb8TeMQiqmi4W8CIS" />

                <CollectionComponent collectionId="5beaaa0653e83f0001e18577" />

                <CollectionComponent collectionId="5bec3f0e8d1736000154335a" />

                {/* <ShopComponent /> */}
            </main>
            {/* Inserting a custom footer */}
            <footer>
                <span className="footer-text">This is the footer</span>
            </footer>
        </React.Fragment>
    }
}