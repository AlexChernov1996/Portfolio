import React from 'react';
import s from './projects.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <h2>Projects</h2>
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
