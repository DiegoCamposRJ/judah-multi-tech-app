/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../componentes/imagens/logo_Judah2021.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <> 
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo'>
                        JMT 
                        <img className='Logo_navbar' type="image/png" src= {Logo} />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                                Início
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/servicos' className='nav-link' onClick={closeMobileMenu}>
                                Serviços
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/projetos' className='nav-link' onClick={closeMobileMenu}>
                                Projetos
                            </Link>
                        </li>

                        
                    </ul>
                </div>    
            </nav>
        </>
    )
}

export default Navbar;
