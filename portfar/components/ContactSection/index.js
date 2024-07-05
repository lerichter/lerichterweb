import React from 'react';
import ContactForm from '../ContactFrom'

const ContactSection = () => {

    return(
        <section id="contact" className="tp-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="info-icon">
                                                <i className="fi flaticon-mail"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Mande um email</h2>
                                            <p>lerchter.c@gmail.com</p>
                                            <br></br>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="info-icon">
                                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                                    <i className="fi flaticon-phone-call"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                            <h2>Nos Chame no WhatsApp</h2>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="info-icon">
                                                 <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Nos ligue agora!</h2>
                                            <p>+55 11 94000 6232</p>
                                            <br></br>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                   
                     
                    </div>                
                </div>
            </div> 

        </section>
     )
        
}

export default ContactSection;
