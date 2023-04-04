import React from 'react';
import Header from "./Header/Header.jsx";
import {Outlet} from "react-router-dom";

const HeaderWrapper = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default HeaderWrapper;
