import React from 'react';
import Foto1 from './imagens/infra_Judah.jpg';

function Producao() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <h1>Produção Audiovisual</h1>
                <p className="">Temos a capacidade em realizar matérias para Live Streamer ou
                    gravação de vídeos de qualquer evento ou aula. Pois, nossa empresa
                    possui os melhores equipamentos a sua disposição.
                </p>
                <div className='col-md-6'>
                    <img className='Foto_1 rounded' src={Foto1} alt="Portfolio"></img>
                </div>
                <div className='col-md-6'>
                    <h4>
                        Produção de conteúdos publicitários,
                        documentarios, jornalísticos e artísticos, o que
                        inclui roteiro, fotografia, iluminação,
                        sonorização e finalização. Sua participação é
                        fundamental na confecção de vídeos e filmes.

                    </h4>
                </div>
                <div className="col-md-5 text-center card">                    
                    <i className='bx bxs-camera-movie card_icon'></i>
                    <h3 className="card_titulo">Equipamento</h3>
                    <p className="card_text">
                        Nossa empresa possui os equipamentos de diferentes
                        orçamentos para sets de gravação
                        de vídeo aulas ou realizar uma
                        Live Streamer para seus eventos.
                    </p>
                    
                </div>
                <div className="col-md-5 text-center card">
                    <i className="fas fa-clipboard-list card_icon"></i>
                    <h3 className="card_titulo">Pode Contar</h3>
                    <p className="card_text">
                        <ul>
                            <li>Análise Textual</li>
                            <li>Animação</li>
                            <li>Captação de Recursos</li>
                            <li>Computação Gráfica</li>
                            <li>Marketing</li>
                            <li>Mídias Digitais</li>
                        </ul>
                    </p>
                    
                </div>
                

                
            </div>
            
        </div>
    )
}

export default Producao;
