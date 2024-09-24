import React from "react";
import "./Footer.css"; // Import your CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h1 className="brand-name">Fióre</h1>
                    <address>
                        Goddard Hall 80<br />
                        Washington Square E,<br />
                        New York, NY 10003, USA
                    </address>
                    <p>+44 (0) 207 739 1521</p>
                    <p>info@ferme.com</p>
                </div>

                <div className="footer-middle">
                    <ul className="footer-links">
                        <li><a href="/">My Account</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Check Order Status</a></li>
                        <li><a href="/">Store Locator</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-right">
                    <p>Follow us</p>
                    <div className="social-icons">
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 VamTam Themes. Privacy Policy | Cookie Policy</p>
            </div>
        </footer>
    );
};

export default Footer;
