import React, {Component, Fragment} from 'react';
import {dataProjetos} from './dataProjetos';
import './BookProjeto.css';


export default class BookProjetos extends Component{
    render(){

        return(
            <Fragment>
                <div className="container-fluid book_reset">
                    <div className="row mobile">
                        {
                            dataProjetos.map((item, index) => (
                                <div className='col-md-3 cardBook' key={item.id}>
                                    <img className='' alt={item.id} src={item.images} />
                                    <div className='card-body'>
                                        <h3 className="card-title itemTitulo">{item.nome}.</h3>
                                        <h5 className='itemTipo'>{item.tipo}</h5>
                                        <p className='itemServico'>Serviço</p>
                                        <h6 className='itemAno'>Contratado: {item.ano}</h6>
                                        <span className='book_spaw'>{item.status}</span>
                                        <div className=''>
                                            <a className='bookLink' target="_blank" rel="noreferrer" href={item.url}>Link</a>
                                        </div>
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