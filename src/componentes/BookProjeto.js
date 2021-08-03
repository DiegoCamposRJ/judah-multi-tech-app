import React, {Component, Fragment} from 'react';
import {dataProjetos} from './dataProjetos';

export default class BookProjetos extends Component{
    render(){

        return(
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        {
                            dataProjetos.map((item, index) => (
                                <div className='col-md-3 card' key={item.id}>
                                    <img alt={item.id} src={item.images} />
                                    <h3>Projeto: {item.nome}.</h3>
                                    <h4>Serviço: {item.tipo}</h4>
                                    <h6>Contratado: {item.ano}</h6>
                                    <span>{item.status}</span>
                                    <div className=''>Botão do Link</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}