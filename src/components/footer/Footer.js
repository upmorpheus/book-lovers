import React from "react";
import { Icon } from './Icon';
import './Footer.scss';

const Footer = () => (
    <div className="footer">
        <div className="contact">
            <h2>Contact Me</h2>
            <a>
                <Icon
                    iconName="Stopwatch"
                    color="royalblue"
                    size={96}
                    className="align-top"
                />
                ahimsainternational@protonmail.com
            </a>
            <a>123 456 7890</a>
            <a></a>
            <a href="https://bioethikapress.com">www.bioethikapress.com</a>
        </div>
        <div className="copyright">
            <a>Copyright by Dr. Ingrid Naiman 2023</a>
        </div>
    </div>
);

export default Footer;