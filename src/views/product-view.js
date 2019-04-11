import * as React from 'react';
import { TipserElement, TipserProduct } from '@tipser/tipser-elements';

export class ProductView extends React.Component {

    render() {
        const { productId } = this.props.match.params;
        return <React.Fragment>
            xxxxxxxx - {productId}
        </React.Fragment>
    }
}