import React from 'react';
import s from "./main.module.css"

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Hi there!</span>
                    <h1>I'm Olexandr Chernov</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    );
};

export default Main;
