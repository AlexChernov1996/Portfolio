import React from 'react';
import s from "./nav.module.css"

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">
                Maine
            </a>
            <a href="">
                Skills
            </a>
            <a href="">
                Projects
            </a>
            <a href="">
                Contacts
            </a>
        </div>
    );
};

export default Nav;
