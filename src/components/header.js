import * as React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '@tipser/tipser-elements';
import logo from '../logo.svg';

export class Header extends React.Component {

    render() {
        return <header className="site-header th-border">
            <nav className="navigation">
                <ul className="horizontal-menu">
                    <li className="horizontal-item">
                                                <a
                            className="link"
                            href="https://dn.se"
                            rel="noopener noreferrer"
                        >
                            <img src={logo} className="te-logo" alt="logo" />
                        </a>
                    </li>

                    {/* <li className="horizontal-item">
                        <Link to="/product/5a1ad987b301420bbce8e976">Example product #1</Link>
                    </li>
                    <li className="horizontal-item">
                        <Link to="/product/5c6d719d3b777f0001dffd36">Example product #2</Link>
                    </li>
                    <li className="horizontal-item">
                        <a
                            className="link"
                            href="https://dn.se"
                            rel="noopener noreferrer"
                        >
                            Tillbaka till Dagens Nyheter
                        </a>
                    </li> */}
                    <li className="horizontal-item te-cart">
                        {/* Inserting the Tipser cart Icon */}
                        <CartIcon />
                    </li>
                </ul>
            </nav>
        </header>
    }
}