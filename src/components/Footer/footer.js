import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                {/*<div className="footer-terms">*/}
                <div className="footer-logo">
                    <Link className="tipser-logo" to="/">
                        <img src={logo} alt="tipser logo" />
                    </Link>
                </div>
                <div className="footer-links ">
                    <a href="https://www.tipser.com/terms" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Conditions of Use and Sale
                    </a>
                    <a href="https://www.tipser.com/terms-privacy" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Privacy notice
                    </a>
                    <a href="https://www.tipser.com/imprint" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Imprint
                    </a>
                    <a href="https://www.tipser.com/terms-cookies" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Cookies &amp; Analytics
                    </a>
                </div>
                <div className="footer-copyrights">© 2011 - 2019, Tipser AB</div>
                {/*</div>*/}
            </footer>
        );
    }
}
