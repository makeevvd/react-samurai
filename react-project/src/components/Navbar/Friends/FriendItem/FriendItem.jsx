import React from 'react';
import s from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = '/friends/' + props.id;
    return (
            <div className={s.friendContainer}>
                <NavLink to={path}>
                    <img className={s.profileImg} src={props.profileImg} alt=""/>
                    <div>{props.name}</div>
                </NavLink>
            </div>
    )
}

export default FriendItem;