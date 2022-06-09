import React from 'react';
import s from './project.module.css'
const Project = (props) => {
    return (
        <div className={s.project}>
<div className={s.background}>
    <button>Show</button>
</div>
<h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default Project;
