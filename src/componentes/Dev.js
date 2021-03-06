import React from 'react';
import Foto2 from './imagens/developer_TI.png';
import './Dev.css';

function Dev() {
    return (
        <div className='container-fluid dev_container'>
            <div className='row'>
                <h1 className='dev_titulo'>Desenvolvimento de Aplicações</h1>
                <p className="dev_texto1">Somos capazes de solucionar seu problema da melhor forma possível, 
                    ou tirar seu projeto do papel e torna-lo real  
                    pois temos uma visão de amplo conhecimento no mercado de desenvolvimento
                    de Sites para seu negócio tanto para o mercado de e-commerce como
                    também para sua escola na implementação de plataforma 100% EAD
                    facilitando o meio de passar as aulas para seus alunos.
                </p>
                <div className='col-md-6'>
                    <img className='Foto_2 rounded' src={Foto2} alt="Portfolio"></img>
                </div>
                <div className='col-md-6'>
                    <h4 className='dev_subtitulo'>
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
                <div className="col-md-3 text-center card2">
                    <i className="fas fa-fighter-jet card_icon"></i>
                    <h3 className="card_titulo2">Agilidade</h3>
                    <p className="card_text2">
                        Temos a preocupação na entrega de seu produto ao mercado.<br/>
                        Pois contamos com os melhores Servidores no assunto de 
                        tecnologia em armazenação de sites e serviços do País, 
                        trazendo assim Agilidade e Segurança a seus clientes 
                        na hora de funcionar suas Aplicações.
                    </p>
                </div>
                <div className="col-md-3 text-center card2">
                    <i className="far fa-handshake card_icon"></i>
                    <h3 className="card_titulo2">Pode Contar</h3>
                        <ul className='card_text2-1'>
                            <li>Consultoria</li>
                            <li>Criação de catálogos</li>
                            <li>Criação de Sites</li>
                            <li>Revenda<br/> de Servidores</li>
                        </ul>
                </div>
                <div className="col-md-3 text-center card2">
                    <i className="fas fa-server card_icon"></i>
                    <h3 className="card_titulo2">Tecnologias do Momento</h3>
                    <p className="card_text2">
                        Trabalhamos com as melhores tecnologia de comunicação na criação rápida de sites.
                    </p>
                    
                </div>

                
            </div>
            
        </div>
    )
}

export default Dev;
