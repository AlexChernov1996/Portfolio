import React from 'react';
import s from './skill.module.css'
const Skill = (props) => {
    return (
        <div className={s.skillWrapper}>
            <div className={s.skillIcon}></div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default Skill;
