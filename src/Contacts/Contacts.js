import React from 'react';
import s from './contacts.module.css'
const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h2>Contacts</h2>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea cols="30" rows="10"></textarea>
                </form>
                <button>Send</button>

            </div>

        </div>
    );
};

export default Contacts;
