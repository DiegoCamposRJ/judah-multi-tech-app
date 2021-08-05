import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Top from '../Top';
import Dev from '../Dev';
import Producao from '../Producao';
import Infra from '../Infra';

//finalizado 1.0
export default function Servicos() {
    return (
        <div>
            <Top />
            <Dev />
            <Producao />
            <Infra />
            <Footer/>
        </div>
    )
}

