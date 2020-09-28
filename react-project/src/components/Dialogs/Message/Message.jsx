import React from 'react';
import s from './../Dialogs.module.css';

let Message = (props) => {

    return (
        <div className={s.messageContainer}>
            <div className={s.dialog}>{props.message}</div>
        </div>
    )
}


export default Message;