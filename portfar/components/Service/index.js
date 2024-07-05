import React, { useState } from 'react';
import ServiceSingle from '../ServiceSingle'
import { Button } from '@mui/material'


const Service = () => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state,setState] = useState({
    })

    const handleClickOpen = (item) =>{
        setOpen(true);
        setState(item)
    }
    const service = [
        {
            Id:"1",
            sIcon:"fi flaticon-web-design",
            heading:"Design de Sites",
            Simg1:'images/service-single/web-design/img-1.jpg',
            Simg2:'images/service-single/web-design/img-2.jpg',
            Simg3:'images/service-single/web-design/img-3.jpg',
            des:'Criamos designs de sites modernos e intuitivos que encantam seus visitantes e proporcionam uma experiência de usuário excepcional.'
        },
        {
            Id:"2",
            sIcon:"fi flaticon-laptop",
            heading:"Desenvolvimento Web",
            Simg1:'images/service-single/development/img-1.jpg',
            Simg2:'images/service-single/development/img-2.jpg',
            Simg3:'images/service-single/development/img-3.jpg',
            des:'Desenvolvemos soluções web robustas e personalizadas que atendem às necessidades específicas do seu negócio, garantindo desempenho e segurança.'
            
        },
        {
            Id:"3",
            sIcon:"fi flaticon-paint-palette",
            heading:"Design Criativo",
            Simg1:'images/service-single/creative/img-1.jpg',
            Simg2:'images/service-single/creative/img-2.jpg',
            Simg3:'images/service-single/creative/img-3.jpg',
            des:'Transformamos suas ideias em designs criativos e atraentes, ajudando sua marca a se destacar no mercado com originalidade e estilo.'
        },
        {
            Id:"4",
            sIcon:"fi flaticon-smartphone",
            heading:"Design Responsivo",
            Simg1:'images/service-single/responsive/img-1.jpg',
            Simg2:'images/service-single/responsive/img-2.jpg',
            Simg3:'images/service-single/responsive/img-3.jpg',
            des:'Garantimos que seu site tenha uma aparência incrível e funcione perfeitamente em todos os dispositivos, proporcionando uma experiência consistente para todos os usuários.'
        },
        {
            Id:"5",
            sIcon:"fi flaticon-verified",
            heading:"Identidade de Marca",
            Simg1:'images/service-single/branding/img-1.jpg',
            Simg2:'images/service-single/branding/img-2.jpg',
            Simg3:'images/service-single/branding/img-3.jpg',
            des:'Desenvolvemos uma identidade de marca única e coerente que reflete a essência do seu negócio, fortalecendo a sua presença no mercado.'
        },
        {
            Id:"6",
            sIcon:"fi flaticon-operator",
            heading:"Suporte 24/7",
            Simg1:'images/service-single/support/img-1.jpg',
            Simg2:'images/service-single/support/img-2.jpg',
            Simg3:'images/service-single/support/img-3.jpg',
            des:'Oferecemos suporte contínuo e dedicado, 24 horas por dia, 7 dias por semana, para garantir que suas operações online funcionem sem interrupções.'
        },
    ]

    return (
        <div id="service" className="service-area section-padding">
            <div className="borderd"></div>
            <div className="container">
                <div className="col-l2">
                    <div className="section-title section-title2 text-center">
                        <span>Em que Somos Especialistas</span>
                        <h2>Nossos Serviços</h2>
                    </div>
                </div>
                <div className="row">
                    {service.map((serv, srv) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={srv}>
                            <div className="service-section">
                                <div className="services-wrapper">
                                    <div className="services-icon-wrapper">
                                        <div className="service-dot">
                                            <div className="dots"></div>
                                            <div className="dots2"></div>
                                        </div>
                                        <i className={serv.sIcon}></i>
                                    </div>
                                    <div className="service-content">
                                        <h2>{serv.heading}</h2>
                                        <p>{serv.des}</p>
                                        <Button
                                            className="btn"
                                            onClick={()=> handleClickOpen(serv)}>
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
            <div className="white_svg">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.heading} doc={state.doc} image1={state.Simg1} image2={state.Simg2} image3={state.Simg3}/>
        </div>
    );
}
export default Service;