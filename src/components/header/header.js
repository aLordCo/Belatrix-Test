import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import './header.css';

function Header() {
    return(
        <header className="header">
            <BrowserRouter>
                <Link to='/'>
                    <img 
                        src="https://www.belatrixsf.com/wp-content/themes/Belatrix/images/logo-belatrix.png"
                        alt="Belatrix Logo" 
                        className="header__logo"
                    />
                </Link>
            </BrowserRouter>
        </header>
    )
}

export default Header;