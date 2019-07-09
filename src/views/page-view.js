import * as React from 'react';

import { Page } from '@tipser/tipser-elements';
import { Header } from '../components/header';

export class PageView extends React.Component {
    render() {
        const { pageId } = this.props.match.params;

        return (
            <React.Fragment>
                <Header />
                <main>
                    <div className="container">
                        <Page id={pageId} />
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
