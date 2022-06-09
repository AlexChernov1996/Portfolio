import React from 'react';
import s from './skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill name={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur.'}/>
                    <Skill name={'CSS'}  description={'Lorem ipsum dolor sit amet, consectetur.'}/>
                    <Skill name={'JS'} description={'Lorem ipsum dolor sit amet, consectetur.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
