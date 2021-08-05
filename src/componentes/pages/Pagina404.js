import React from 'react';
import '../../App.css';
import '../Pagina404.css';
import Footer from '../Footer';
import Erro404 from '../imagens/erro-404.jpg';

export default function Pagina404() {
    return (
        <div className='P404'>
            
                <img className='image_404' src={Erro404} alt='Pagina de Erro'/>
			    <h1>404 : Página não encontrada!</h1>
           
            <Footer/>
        </div>
    )
}