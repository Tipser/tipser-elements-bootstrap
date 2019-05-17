import * as React from "react";
import {
  TipserElement,
  TipserProduct,
  CartIcon,
  CollectionComponent,
  ShopComponent
} from "@tipser/tipser-elements";
import { Header } from "../components/header";

export class ComponentsView extends React.Component {
    
  render() {
    const styleMedium = {
        width: "980px",
        margin: "0 auto",
        border: "1px solid pink"
    }

    const styleSmall = {
        width: "767px",
        margin: "0 auto",
        border: "1px solid pink"
    }

    const styleXS = {
        width: "400px",
        margin: "0 auto",
        border: "1px solid pink"
    }

    return (
      <React.Fragment>
        <Header />
        <main>
          {/* Inserting an elment from Contentful taking the content Id as the prop. This example renders a page, consisting of other components */}
          <TipserElement id="2OeW1Ab8lKNcUq6dVUh79" />

          {/* Inserting a product using the productId as prop  */}
          <TipserProduct productId="5ba2334a781baa0001ccdffc" />

          <div style={styleMedium}>
            <h3>Container width 980px</h3>
            <TipserProduct productId="5aafd24f9d25801d54d41132" />
          </div>
          <div style={styleSmall}>
            <h3>Container width 767px</h3>
            <TipserProduct productId="5aafd24f9d25801d54d41132" />
          </div>
          <div style={styleXS}>
            <h3>Container width 400px</h3>
            <TipserProduct productId="5aafd24f9d25801d54d41132" />
          </div>

          {/* Inserting an elment from Contentful taking the content Id as the prop. This example renders a page, consisting of other components */}
          <TipserElement id="1larHZb8TeMQiqmi4W8CIS" />

          <CollectionComponent collectionId="5beaaa0653e83f0001e18577" />

          <CollectionComponent collectionId="5bec3f0e8d1736000154335a" />

          <CollectionComponent collectionId="594a228e8aa0ce56d8aaad06" />

          <ShopComponent />
        </main>
        {/* Inserting a custom footer */}
        <footer>
          <span className="footer-text">This is the footer</span>
        </footer>
      </React.Fragment>
    );
  }
}
