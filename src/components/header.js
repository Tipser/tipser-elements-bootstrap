import * as React from 'react';
import { CartIcon } from '@tipser/tipser-elements';
import logo from '../logo.svg';

export class Header extends React.Component {

    render() {
        return <header className="header">
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
    }
}