import React from 'react';

import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="d-flex align-items-center justify-content-between">
            <img src={Logo} alt="Logo" height="130" />
            <button>Login</button>
        </header>
    )
}

export default Header;