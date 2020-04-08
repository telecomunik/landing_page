import React from 'react';
import mail from './mail.svg';
import tel from './tel.svg';
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="contacts">
                        <a href="#" className="contacts-link">
                            <img className="contacts-icom" src={mail} alt="Mail" />energok3@gmail.com</a>
                        <a href="#" className="contacts-link">
                            <img className="contacts-icom" src={tel} alt="Tel" />+38 097-776-40-95</a>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;