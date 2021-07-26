import React from 'react';

import Logo from '../../assets/logo.png';

import { FiLogIn } from 'react-icons/fi';

const Header = ({ changeColor }) => {
    return (
        <header className={changeColor ? "solidHeader d-flex align-items-center justify-content-between" : "d-flex align-items-center justify-content-between"}>
            <img src={Logo} alt="Logo" height={changeColor ? "70" : "130"} />
            <button className="d-flex align-items-center justify-content-center">
                <FiLogIn size={20} style={{ marginRight: 5 }} />
                Login
            </button>
        </header>
    )
}

export default Header;