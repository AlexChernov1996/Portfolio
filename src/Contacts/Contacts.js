import React from 'react';
import s from './contacts.module.css'
import Title from "../common/Title/Title";
const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <Title title='contacts'/>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea cols="30" rows="10"></textarea>
                    <button type='submit'>Send</button>
                </form>


            </div>

        </div>
    );
};

export default Contacts;
