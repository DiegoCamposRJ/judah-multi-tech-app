import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../componentes/imagens/logo_Judah2021.png';

const Footer = () => {
    return(
        <div>
            <div className="container-fluid footer">
                <div className="row justify-content-md-center">
                    <div className="col-auto col-md-12 text-center">
                    <img className="Logo_footer" src={Logo}  alt="Logo_Judah_Multi_Tech_2021"></img>
                        <h3 className="Judah_h3">JUDAH MULTI TECH</h3>
                        <p className="blocoCNPJ">CNPJ: 38.324.137/0001-74</p>
                        <p className="blocoMunicipal">INSCRIÇÃO MUNICIPAL: 991.341.09</p>
                        <p className="blocoCNPJ">RIO DE JANEIRO</p>
                        <p className="bloco_infor">
                            Atendimento de segunda à sexta-feira de 9:00 até 18:00 horas.
                            <br />
                            Duvidas é Informações.
                        </p>
                        <div>
                        <p className="tel_email_1"><i className="fab fa-whatsapp"></i>  (21)98953-7245</p>
                        <p className="tel_email_2"><i className="fas fa-mail-bulk"></i>  judahmultitech@gmail.com</p>
                        </div>
                        
                        
                     {/* <p className="tel_email">Email:judahmultitech@gmail.com</p>*/}
                    </div>

                        <div className="col-md-4 text-center">
                            <h5 className="link_footer">
                                <i className="fab fa-facebook-square icon_footer">
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/judahmultitech">Facebook</a>
                                </i>
                            </h5>  
                        </div>

                        <div className="col-md-4 text-center">
                            <h5 className="link_footer">
                                <i className="fab fa-instagram icon_footer"> 
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/judahmultitech">Instagram Feed</a>
                                </i>
                            </h5>
                             
                            
                        </div>

                        <div className="col-md-4 text-center">
                            <h5 className="link_footer">
                                <Link  to='../pages/Politica' className="fas fa-user-shield icon_footer ">
                                    Política de Privacidade.
                                </Link>
                            </h5> 
                               
                             
                            
                        </div>
                </div>
            </div>
            <div className='container-fluid footer2'>
                <div className='row'>
                    <div className="col-md-12 text-center">
                        <h5 className="footer_data">© Judah Multi Tech 2021 todos os direitos reservados</h5>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Footer;