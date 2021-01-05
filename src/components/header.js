import * as React from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '@tipser/tipser-elements';
import logo from '../logo.svg';
import './header.css';

export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <nav className="navigation">
                    <Link className="te-logo" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    {/*<ul className="horizontal-menu">*/}
                    {/*    <li className="horizontal-item">*/}
                    {/*        <Link to="/product/589c82198aa0ce70743b0442">Example product</Link>*/}
                    {/*    </li>*/}
                    {/*    <li className="horizontal-item">*/}
                    {/*        <Link to="/responsiveness">Responsiveness</Link>*/}
                    {/*    </li>*/}

                    {/*    <li className="horizontal-item">*/}
                    {/*        <a*/}
                    {/*            className="link"*/}
                    {/*            href="https://tipser.github.io/docs/#tipser-elements"*/}
                    {/*            target="_blank"*/}
                    {/*            rel="noopener noreferrer"*/}
                    {/*        >*/}
                    {/*            Documentation*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li className="horizontal-item">*/}
                    {/*        <a*/}
                    {/*            className="link"*/}
                    {/*            href="https://github.com/Tipser/tipser-elements-react-bootstrap"*/}
                    {/*            target="_blank"*/}
                    {/*            rel="noopener noreferrer"*/}
                    {/*        >*/}
                    {/*            GitHub repo*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    <Cart />
                </nav>
            </header>
        );
    }
}
