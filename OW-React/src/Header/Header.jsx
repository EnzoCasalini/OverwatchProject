import React from 'react';
import Logo from "./Logo/Logo.jsx";
import './Header.css';
import Links from "./Links/Links.jsx";

const Header = () => {
    return (
        <div className={"headerContainer"}>
            <header className={"header"}>
                <Logo/>
                <Links/>
            </header>
        </div>
    );
};

export default Header;
