import React from 'react';
import Foto1 from './imagens/Foto_1.jpg';

function Dev() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <h1>Desenvolvimento de Aplicações</h1>
                <p className="">Somos capazes de solucionar seu problema da melhor forma possível, 
                    ou tirar seu projeto do papel e torna-lo real  
                    pois temos uma visão de amplo conhecimento no mercado de desenvolvimento
                    de Sites para seu negócio tanto para o mercado de e-commerce com
                    também na sua escola na implementação de plataforma 100% EAD
                    facilitando o meio de passar as aulas para seus alunos.
                </p>
                <div className='col-md-6'>
                    <img className='Foto_1 rounded' src={Foto1} alt="Portfolio"></img>
                </div>
                <div className='col-md-6'>
                    <h4>
                        O termo E-commerce (ou “comércio eletrônico”
                        em português) é a comercialização de produtos
                        e serviços pela internet, onde as transações são
                        realizadas via dispositivos eletrônicos, como
                        computadores e smartphones. Esse tipo de
                        comércio pode contar com diversos canais de
                        vendas. O mais conhecido é a loja virtual.
                        Porém, também temos outros, como
                        marketplaces, vendas nas redes sociais e até
                        vendas por e-mail marketing.
                        Educação a distância é uma modalidade de
                        educação mediada por tecnologias em que
                        discentes e docentes estão separados espacial
                        e/ou temporalmente, ou seja, não estão
                        fisicamente presentes em um ambiente
                        presencial de ensino-aprendizagem.
                    </h4>
                </div>
                <div className="col-md-3 text-center card">
                    <i className="fas fa-fighter-jet card_icon"></i>
                    <h3 className="card_titulo">Agilidade</h3>
                    <p className="card_text">
                        Temos a preocupação na entrega
                        de seu produto ao mercado, pois
                        contamos com os melhores
                        serviços de armazenação de sites
                        do País entregando Agilidade e
                        Segurança a seus clientes na hora da compra.
                    </p>
                    
                </div>
                <div className="col-md-3 text-center card">
                    <i className="far fa-handshake card_icon"></i>
                    <h3 className="card_titulo">Pode Contar</h3>
                    <p className="card_text">
                        <ul>
                            <li>Consultoria</li>
                            <li>Criação de catálogos</li>
                            <li>Criação de Sites</li>
                            <li>Revenda de Servidores</li>
                        </ul>
                    </p>
                    
                </div>
                <div className="col-md-3 text-center card">
                    <i className="fas fa-server card_icon"></i>
                    <h3 className="card_titulo">Tecnologias do Momento</h3>
                    <p className="card_text">
                        Trabalhamos com as melhores tecnologia de comunicação na criação rápida de sites.
                    </p>
                    
                </div>

                
            </div>
            
        </div>
    )
}

export default Dev;
