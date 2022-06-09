import React from 'react';
import s from"./header.module.css"
import Nav from "./Nav/Nav";
const Header = () => {
    return (
        <div className={s.header}>
<Nav/>
        </div>
    );
};

export default Header;
