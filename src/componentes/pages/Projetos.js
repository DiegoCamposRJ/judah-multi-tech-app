import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import BookProjetos from '../BookProjeto';


export default function Projetos() {
    return (
        <div className='tema_Projetos'>
            <h1>Judah Multi Tech - Projetos</h1>
            <p className='text-center'>Veja agora um pouco de quais instituições a Judah Multi Tech já 
                realizou serviços sem expor informações confidencial de cada trabalha prestado.
            </p>
            
                
            <BookProjetos/>
            <Footer/>
        </div>
    )
}
