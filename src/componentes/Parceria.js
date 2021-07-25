import React, {Component, Fragment} from 'react';
import './Parceria.css'
const parcerias = [
    {
        id:1,
        images: require('./imagens/amd_logo.png').default,
    },
    {
        id:2,
        images: require('./imagens/arduino_logo.png').default,
    },
    {
        id:3,
        images: require('./imagens/Asus_logo.png').default,
    },
    {
        id:4,
        images: require('./imagens/avast_logo.png').default,
    },
    {
        id:5,
        images: require('./imagens/gigabyte_logo.png').default,
    },
    {
        id:6,
        images: require('./imagens/HP_logo.png').default,
    },
    {
        id:7,
        images: require('./imagens/intel_logo.png').default,
    },
    {
        id:8,
        images: require('./imagens/kaspersky_logo.png').default,
    },
    {
        id:9,
        images: require('./imagens/Kingston_logo.png').default,
    },
    {
        id:10,
        images: require('./imagens/microsoft_logo.png').default,
    },
    {
        id:11,
        images: require('./imagens/raspberry_logo.png').default,
    },
    {
        id:12,
        images: require('./imagens/amd_logo.png').default,
    },
];
export default class Parceria extends Component{
    render(){

        return(
            <Fragment>
                <div className="container-fluid">
                    <div className="row text-center">
                        <h2 className="parceria_titulo text-center">Parceria e Especialização</h2>
                        <ul className="appList">
                            {parcerias.map((item, index) =>(    
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

