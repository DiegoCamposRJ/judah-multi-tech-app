import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
                        <img className='Logo_navbar' type="image/png" src="../../public/logo_ Judah2021.png" alt="logo do site" />
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
                            <Link to='./pages/Servicos' className='nav-link' onClick={closeMobileMenu}>
                                Serviços
                            </Link>
                        </li>

                        
                    </ul>
                </div>    
            </nav>
        </>
    )
}

export default Navbar;
