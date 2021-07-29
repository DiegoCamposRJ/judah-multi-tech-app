import React from 'react';
import Foto3 from './imagens/live_streaming.jpg';
import './Producao.css';

function Producao() {
    return (
        <div className='container-fluid prod_container'>
            <div className='row'>
                <h1 className='prod_titulo'>Produção Audiovisual</h1>
                <p className='prod_texto1'>Temos a capacidade em realizar matérias para Live Streamer ou
                    gravação de vídeos de qualquer evento ou aula. Pois, nossa empresa
                    possui os melhores equipamentos a sua disposição.
                </p>
                <div className='col-md-6'>
                    <img className='Foto_3 ' src={Foto3} alt="Portfolio"></img>
                </div>
                <div className='col-md-6'>
                    <h4 className='prod_subtitulo'>
                        Produção de conteúdos publicitários,
                        documentarios, jornalísticos e artísticos, o que
                        inclui roteiro, fotografia, iluminação,
                        sonorização e finalização. Sua participação é
                        fundamental na confecção de vídeos e filmes.

                    </h4>
                </div>
                <div className="col-md-5 text-center card3">                    
                    <i className='bx bxs-camera-movie card_icon'></i>
                    <h3 className="card_titulo3">Equipamento</h3>
                    <p className="card_text3">
                        Nossa empresa possui os equipamentos de diferentes
                        orçamentos para sets de gravação
                        de vídeo aulas ou realizar uma
                        Live Streamer para seus eventos.
                    </p>
                    
                </div>
                <div className="col-md-5 text-center card3">
                    <i className="fas fa-clipboard-list card_icon"></i>
                    <h3 className="card_titulo3">Pode Contar</h3>
                        <ul className="card_text3">
                            <li>Análise Textual</li>
                            <li>Animação</li>
                            <li>Captação de Recursos</li>
                            <li>Computação Gráfica</li>
                            <li>Marketing</li>
                            <li>Mídias Digitais</li>
                        </ul>
                </div>
                

                
            </div>
            
        </div>
    )
}

export default Producao;
