import * as React from 'react';

export class NotFoundView extends React.Component {

    render() {
        const { productId } = this.props;
        return <React.Fragment>
            The page is not found
        </React.Fragment>
    }
}