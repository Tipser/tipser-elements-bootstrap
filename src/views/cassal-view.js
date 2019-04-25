import * as React from 'react';
import { connect } from 'react-refetch';

import { TipserProduct, Menu, CartIcon, MainMenu, RootPage, Site, CollectionComponent } from '@tipser/tipser-elements';
import { Header } from '../components/header';

class CassalViewComponent extends React.Component {

    render() {
      
        return <React.Fragment>
            <Menu id=""/>
            <Site id="3gArLpsQwldFUbujEERmfM">
                <MainMenu/>
                <CartIcon></CartIcon>
                <RootPage/>
                <TipserProduct productId="5ba2334a781baa0001ccdffc" />
            </Site>
            <div>asdasdasdasd</div>
        </React.Fragment>
    }
}

export const CassalView = connect(props => ({
    similarProductsFetch: `https://t3-prod-api.tipser.com/v3/products/${props.match.params.productId}/similar?onlyAvailable=true`
  }))(CassalViewComponent)