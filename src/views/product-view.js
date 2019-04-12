import * as React from 'react';
import { TipserElement, TipserProduct } from '@tipser/tipser-elements';
import { Header } from '../components/header';

export class ProductView extends React.Component {

    render() {
        const { productId } = this.props.match.params;
        return <React.Fragment>
            <Header></Header>
            <main>
            <TipserProduct productId={productId} />
            </main>
        </React.Fragment>
    }
}