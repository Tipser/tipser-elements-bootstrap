import React, { Component } from 'react';
import { TipserElement, TipserProduct, CartIcon, TipserElementsProvider, CollectionComponent } from '@tipser/tipser-elements';
import logo from './logo.svg';
import './App.css';


let tipserConfig = {
    posId: '59e86b79b8f3f60a94ecd26a',
    lang: 'en',
    env: 'prod',
    primaryColor: 'red'
};


class App extends Component {
  render() {
    return (
      <TipserElementsProvider context={tipserConfig}>
          <div>
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
                          <li className="horizontal-item te-cart">
                              {/* Inserting the Tipser cart Icon */}
                              <CartIcon/>
                          </li>
                      </ul>
                  </nav>
              </header>
              <main>
                  {/* Inserting an elment from Contentful taking the content Id as the prop. This example renders a page, consisting of other components */}
                  <TipserElement  id="2OeW1Ab8lKNcUq6dVUh79" />

                  {/* Inserting a product using the productId as prop  */}
                  <TipserProduct productId="5ba2334a781baa0001ccdffc"/>

                  {/* Inserting an elment from Contentful taking the content Id as the prop. This example renders a page, consisting of other components */}
                  <TipserElement  id="1larHZb8TeMQiqmi4W8CIS" />

                  <CollectionComponent collectionId="5beaaa0653e83f0001e18577" />

                  <CollectionComponent collectionId="5bec3f0e8d1736000154335a" />
              </main>
              {/* Inserting a custom footer */}
              <footer>
                  <span className="footer-text">This is the footer</span>
              </footer>
          </div>
      </TipserElementsProvider>
    );
  }
}

export default App;
