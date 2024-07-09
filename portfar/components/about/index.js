import React from 'react';
import Image from 'next/image';
import banner from '../../public/Images/banner.png';

const About = (props) => {
    return(
        <section id="about" className="tp-about-section">
            <div className="container">
                <div className="row d-flex align-items-stretch">
                    <div className="col-lg-5 col-md-12 col-12 d-flex">
                        <div className="tp-about-wrap flex-fill">
                            <div className="tp-about-img">
                                <Image src={banner} alt="Banner Image" layout="responsive"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12 d-flex">
                        <div className="tp-about-text flex-fill">
                            <div className="tp-about-icon">
                                <i className="fi flaticon-web-design"></i>
                            </div>
                            <div className="tp-about-icon-content">
                                <h2>Inovação e Tecnologia ao Seu Alcance</h2>
                                <p>Nossa empresa é formada por especialistas em desenvolvimento web e apaixonados por tecnologia. <br></br>
                                Com anos de experiência na criação de soluções digitais inovadoras, ajudamos empresas a transformar suas ideias em realidade através de sites modernos, funcionais e visualmente atraentes. 
                                Utilizando uma abordagem centrada no cliente, garantimos que cada projeto seja desenvolvido com excelência e atenção aos detalhes.<br></br><br></br>
                                Se você busca uma presença digital forte e impactante, estamos aqui para ajudar! <br></br>
                                Vamos transformar o seu projeto em um sucesso. <br></br><br></br>
                                Entre em contato e descubra como posso contribuir para o crescimento do seu negócio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white_svg svg_white">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </section>
    )
}

export default About;
