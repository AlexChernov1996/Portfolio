import React from 'react';
import s from './projects.module.css'
import Project from "./Project/Project";
import Title from "../common/Title/Title";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <Title title='projects'/>
                <div className={s.projectsWrapper}>
                    <Project name={'Todolist'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Project name={'Counter'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Project name={'Social Network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
