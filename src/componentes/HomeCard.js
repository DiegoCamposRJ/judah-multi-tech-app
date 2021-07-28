import React from 'react';
import './HomeCart.css';
import { Link } from 'react-router-dom';

const HomeCard = () => {
    return(
        <div className="container-fluid">
            <div className="row  text-center">
                <h2 className="titulo_3">Tipo de Mercados na qual atuamos</h2>

                <div className="col-md-3 text-center card">
                    <i className="fas fa-laptop-code card_icon"></i>
                    <h3 className="card_titulo">Tecnologia das Coisas</h3>
                    <p className="card_text">
                        Desenvolvimento de Sites e Aplicações
                        para sua necessidade.
                    </p>
                    <Link to='/servicos' className="link_card">
                        Saiba+
                    </Link>
                </div>

                <div className="col-md-3 text-center card">
                    <i className="fas fa-tools card_icon"></i>
                    <h3 className="card_titulo">Especialistas em TI</h3>
                    <p className="card_text">
                        Revenda, Suporte, Especialista de
                        equipamentos na linha Nacional e
                        Internacional.
                    </p>
                    <Link to='/servicos' className="link_card">
                        Saiba+
                    </Link>
                </div>

                <div className="col-md-3 text-center card">
                <div className='card1'>
                    <i className="fas fa-camera card_icon"></i>
                    <h3 className="card_titulo">Produção Audiovisual</h3>
                    <p className="card_text">
                        Produção de material Audiovisual,
                        equipamentos para transmissão de Aula
                        e Eventos.
                    </p>
                </div>
                    
                    <Link to='/servicos' className="link_card">                    
                        Saiba+
                    </Link>
                    
                </div>
            </div>
        </div>






    )

}
export default HomeCard;