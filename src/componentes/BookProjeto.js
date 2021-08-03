import React, {Component, Fragment} from 'react';
import {dataProjetos} from './dataProjetos';
import './BookProjeto.css';


export default class BookProjetos extends Component{
    render(){

        return(
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        {
                            dataProjetos.map((item, index) => (
                                <div className='col-md-3 cardBook' key={item.id}>
                                    <img className='' alt={item.id} src={item.images} />
                                    <div className='card-body'>
                                        <h3 className="card-title">{item.nome}.</h3>
                                        <h5>Serviço: {item.tipo}</h5>
                                        <h6>Contratado: {item.ano}</h6>
                                        <span className='book_spaw'>{item.status}</span>
                                        <div className=''>Botão do Link</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}