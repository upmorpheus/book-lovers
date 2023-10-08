import React from "react";
import './Footer.scss';

const Footer = () => (
    <div className="footer">
        <div className="contact">
            <h2>Contact Me</h2>
            <div className="items">
                <a>
                    <i class="bi-envelope-open-fill me-2"></i>
                    ahimsainternational@protonmail.com
                </a>
                <a>
                    <i class="bi-telephone-fill me-2"></i>
                    123 456 7890
                </a>
                <a>
                    <i class="bi-geo-alt-fill me-2"></i>
                    Poulsbo, Washington
                </a>
                <a href="https://bioethikapress.com" target="_blank">
                    <i class="bi-globe me-2"></i>
                    www.bioethikapress.com
                </a>
            </div>
        </div>
        <div className="copyright">
            <a>Copyright by Dr. Ingrid Naiman 2023</a>
        </div>
    </div>
);

export default Footer;