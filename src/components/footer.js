import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo-small.svg';
import Klarna from '../resources/psp-icon/klarna.png';
import Mastercard from '../resources/psp-icon/mastercard.png';
import Visa from '../resources/psp-icon/visa.png';



export class Footer extends React.Component {

    render() {
        return <footer className="site-footer">
            <nav className="site-footer__top">
                <div class="footer-contact-us">
                    <span class="footer-header">Have a question?</span>
                    <div class="footer-links">
                        <a href="mailto:support@tipser.com" class="footer-link">support@tipser.com</a>
                    </div>
                </div>
                <div class="footer-columns">
                    <div class="footer-security-info footer-column">
                        <span class="footer-header">Shop with Tipser</span>
                        <div class="footer-security-info-bullets">
                            <span>
                                <span class="tipser-icon tipser-icon-safe"></span>
                                Secure shopping
                            </span>
                            <span><span class="tipser-icon tipser-icon-heart"></span> Safe payment with Klarna</span>
                            <span><span class="tipser-icon tipser-icon-return"></span> 14 days return policy</span>
                        </div>
                    </div>
                    <div class="footer-payments footer-column">
                        <span class="footer-header">Pay with</span>
                        <div class="footer-payments-icons">
                            <span class="psp-icon-wrapper">
                                <img class="psp-icon" src={Klarna}/>
                            </span>
                            <span class="psp-icon-wrapper">
                                <img class="psp-icon" src={Mastercard}/>
                            </span>
                            <span class="psp-icon-wrapper">
                                <img class="psp-icon" src={Visa}/>
                            </span>
                        </div>
                    </div>
                    <div class="footer-help footer-column"><span class="footer-header">Let us help you</span><span
                            class="footer-link"><a href="/support" target="_blank">Help</a></span><span class="footer-link"><a
                                href="/auth/signup?merchant=true" target="_blank">Sign up for a merchant account</a></span></div>
                </div>

                <div class="footer-terms">
                    <div class="footer-terms-links">
                        <div class="footer-links footer-links-privacy footer-links-inline">
                            <a href="https://tipser.com/terms?pageLang=sv" target="_blank" class="footer-link">Conditions of Use and Sale</a><a
                                href="https://tipser.com/terms/privacy?pageLang=sv" target="_blank" class="footer-link">Privacy notice</a><a
                                href="https://tipser.com/terms/cookies?pageLang=sv" target="_blank" class="footer-link">Cookies &amp; Analytics</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="site-footer__bottom">
                <div class="footer-copyrights">© 2011 - 2019, Tipser AB</div>

                <a href="/" class="">
                    <svg src={Logo} className="te-small icon" alt="logo" />
                </a>
            </div>

        </footer>
    }
}