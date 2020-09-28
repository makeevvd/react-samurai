import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

let DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
                <NavLink activeClassName={s.active} to={path}>
                    <img className={s.profileImg} src={props.profileImg} alt=""/>
                    <div>{props.name}</div>
                </NavLink>
        </div>
    )
}

export default DialogItem;