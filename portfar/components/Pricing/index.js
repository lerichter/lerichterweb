import React, { Component } from 'react';

import Link from 'next/link'

class PricingPlan extends Component {
    render() {
        return (
            <section id="pricing" className="pricing-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title text-center">
                                <span>Nossos Preços</span>
                                <h2>Tabela de Preços</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="pricing-grids">
                                <div className="grid">
                                    <div className="pricing-header">
                                        <div className="circuler-price">
                                            <i className="fi flaticon-verified"></i>
                                        </div>
                                        <p>Sites WordPress</p>
                                    </div>
                                    <div className="pricing-body">
                                        <h2><sup>R$</sup>2.650</h2>
                                        <ul>
                                            <li>Layout Personalizado</li>
                                            <li>Desenvolvimento Web</li>
                                            <li>Design Responsivo</li>
                                            <li>Suporte em horário comercial</li>
                                            <li>Parcelamento em até 6x sem juros</li>
                                        </ul>
                                        <Link href="/" className="template-btn">Order Now</Link>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="pricing-header">
                                        <div className="circuler-price">
                                            <i className="fi flaticon-paint-palette"></i>
                                        </div>
                                        <p>Sites em Javascript <br></br> React/Vue</p>
                                    </div>
                                    <div className="pricing-body">
                                        <h2><sup>R$</sup>3.890</h2>
                                        <ul>
                                            <li>Layout Personalizado</li>
                                            <li>Desenvolvimento Web</li>
                                            <li>Design Responsivo</li>
                                            <li>Suporte em horário comercial</li>
                                            <li>Parcelamento em até 8x sem juros</li>
                                        </ul>
                                        <Link href="/" className="template-btn">Order Now</Link>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="pricing-header">
                                        <div className="circuler-price">
                                            <i className="fi flaticon-operator"></i>
                                        </div>
                                        <p>Personalizado</p>
                                    </div>
                                    <div className="pricing-body">
                                        <h2><sup>R$</sup>a consultar</h2>
                                        <ul>
                                            <li>Design Criativo</li>
                                            <li>Desenvolvimento Web</li>
                                            <li>Design Responsivo</li>
                                            <li>Identidade de Marca</li>
                                            <li>Suporte 24/7</li>
                                            <li>Parcelamento em até 10x sem juros</li>
                                        </ul>
                                        <Link href="/" className="template-btn">Order Now</Link>
                                    </div>
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
        );
    }
}

export default PricingPlan;