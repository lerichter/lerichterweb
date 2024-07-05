import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lerichter"><i className="fa fa-linkedin"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lerichter.web"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i>LeRichter <span> 2024. CNPJ 39.763.843/0001-85</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;