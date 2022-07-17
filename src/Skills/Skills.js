import React from 'react';
import s from './skills.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/Title/Title";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <Title title='skills'/>
                <div className={s.skills}>
                    <Skill name={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur.'}/>
                    <Skill name={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur.'}/>
                    <Skill name={'JS'} description={'Lorem ipsum dolor sit amet, consectetur.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
