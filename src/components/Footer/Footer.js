import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className='footer__copyright'>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/kj-ninja">kj-ninja</a>
                </div>
                <p>Back to top</p>
            </div>
        </footer>
    );
};

export default Footer;