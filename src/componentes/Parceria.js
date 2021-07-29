import React, {Component, Fragment} from 'react';
import './Parceria.css'
import {data} from './data';

export default class Parceria extends Component{
    render(){

        return(
            <Fragment>
                <div className="container-fluid">
                    <div className="row text-center">
                        <h2 className="parceria_titulo text-center">Parceria e Especialização</h2>
                        <ul className="appList">
                            {data.map((item, index) =>(    
                                <li className="item" key={item.id}>
                                    <img alt={item.id} src={item.images} />
                                </li>
                            ))}
                        </ul>
                
                        <br />
                     </div>
                </div>
            </Fragment>
        );
    }
}

