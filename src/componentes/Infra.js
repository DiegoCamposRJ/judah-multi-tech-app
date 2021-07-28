import React from 'react';
import Foto4 from './imagens/infra_Judah.jpg';
import './Infra.css';

function Infra() {
    return (
        <div className='container-fluid infra_container'>
            <div className='row'>
                <h1 className='infra_titulo'>Infraestrutura em TI</h1>
                <p className="infra_texto1">Tenha o melhor de seguimento em tecnologia para seu local de
                    trabalho com agilidade, segurança de dados, implementação de
                    inventários, manutenção de equipamentos e canais de helpDesk.
                </p>
                <div className='col-md-6'>
                    <img className='Foto_4 ' src={Foto4} alt="Portfolio"></img>
                </div>
                <div className='col-md-6'>
                    <h4 className='infra_subtitulo'>
                        A manutenção dos computadores de sua
                        empresa é essencial para que eles continuem
                        funcionando por um bom tempo, limpeza
                        interna, remoção de poeira e aplicação de pasta
                        térmica a cada 6 meses podem ajudar em um
                        melhor desempenho.
                        Nos dias atuais com tantas tarefas acabamos
                        esquecendo de fazer a manutenção preventiva
                        dos computadores e quando eles param causam
                        muitos prejuízos a empresa, atrasos na emissão
                        daquela nota fiscal um email importante que
                        deixou de ser enviado e assim vai. Não deixe de
                        contratar um especialista para cuidar de sua TI.
                    </h4>
                </div>
                <div className="col-md-5 text-center card">
                    <i className="fas fa-laptop-medical card_icon"></i>                 
                    <h3 className="card_titulo4">Manutenção</h3>
                    <p className="card_text">
                        Mais do que suporte técnico temos
                        profissionais prontos para fazer
                        seus equipamentos voltarem a ficar
                        novinhos funcionando melhor do
                        que antes.
                    </p>
                </div>
                <div className="col-md-5 text-center card">
                    <i className="fas fa-user-md card_icon"></i>                   
                    <h3 className="card_titulo4">Help Desk</h3>
                    <p className="card_text">
                        Temos o serviço especial, com um
                        canal de comunicação dedica para
                        suas necessidades na escala de 5×2
                        para te ajuda na solução de
                        incidente.
                    </p>
                </div>
                <div className="col-md-5 text-center card">
                    <i className="fas fa-tools card_icon"></i>                  
                    <h3 className="card_titulo4">Lab</h3>
                    <p className="card_text">
                        Possuímos um Laboratório pronto
                        para realizar teste, recuperar
                        arquivos, limpeza química em seus
                        equipamento, venda de software,
                        instalação de OS, venda de
                        componentes e periféricos em
                        geral.
                    </p>
                </div>
                <div className="col-md-5 text-center card">
                    <i className="fas fa-file-signature card_icon"></i>                   
                    <h3 className="card_titulo4">Check List</h3>
                    <p className="card_text">
                        Tenha o total controle de seus
                        equipamento com a
                        implementação de inventario
                        inteligente e relatórios na sua 
                        empresa facilitando a identificação
                        de um possível erro.
                    </p>
                </div>
                <div className="col-md-5 centralizar text-center card">
                    <i className="fas fa-award card_icon"></i>                 
                    <h3 className="card_titulo4">Consultoria</h3>
                    <p className="card_text">
                        Possuímos especialista prontos para te auxiliar em 
                        determinado seguimento no ramo tecnológico como na 
                        compra de equipamentos ou aquisição de software e muito mais.
                    </p>
                </div>
                

                
            </div>
            
        </div>
    )
}

export default Infra;
