import React from 'react';
import './Corpo.css';
import Foto1 from './imagens/Foto_1.jpg';
import Logo from '../componentes/imagens/logo_Judah2021.png';

const Corpo = () => {
    return(
        <>  <div className="container-fluid"> 
                <div className='row top_corpo'>
                    <div className='col-md-6'>
                        <h1 className='texto_bem'>Bem-Vindo<br/>A<br/><span>Judah Multi Tech.</span></h1>
                        <p className="text_1">
                            A primeiro do seguimento de
                            Multisserviços em tecnologia (TIC),
                            apresentamos as novas inovações
                            do mercado, praticidade e
                            agilidade para solucionar o
                            problema de forma
                            rápida para o seu negócio.
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <img className='Logo_corpo' src={Logo} alt="Logo Judah Multi Tech"></img>
                    </div>
                </div>
            </div>
        <div className="container-fluid corpo">
            <div className="row  text-center">
                <h2 className="titulo_2">JUDAH MULTI TECH</h2>
                <div className="col-md-6">
                    <img className='Foto_1' src={Foto1} alt="Portfolio"></img>
                </div>
                <div className="col-md-6">
                    <p className='text_corpo'> Atuamos em diversos seguimentos do
                        mercado de TI e seguimos padrões de
                        empresas que são referências.
                        Atualmente, procuramos atender um
                        novo seguimento na nova
                        revolução 4.0 a fim de atender uma
                        demanda do mercado a
                        qual não está esquecida pela
                        desvalorização, mas por falta de
                        conhecimento nessa atuação. Além
                        disso, por meio desse conhecimento,
                        podemos oferecer novas tecnologias
                        sustentáveis as quais trarão economia
                        para o seu negócio.
                    </p>
                </div>
                <br />
            </div>
        </div></>
    )
}

export default Corpo;