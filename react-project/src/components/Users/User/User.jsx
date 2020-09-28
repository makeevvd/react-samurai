import React from 'react';
import s from './User.module.css'
import {NavLink} from "react-router-dom";
let defaultImageUrl = 'https://bit.ly/3jdsp2D';


let User = ({user, toggleFollow, id, followingInProgress, photos, follow, unfollow }) => {
    let onToggleFollow = () => {
        toggleFollow(id);
    }

    return (
        <div className={s.userContainer}>
            <div className={s.avatarContainer}>
                <NavLink to={'/profile/' + user.id}>
                    <div>
                        <img className={s.avatar} src={user.photos.small || defaultImageUrl} alt=""/>
                    </div>
                </NavLink>
                <div>
                    <button className={s.followButton} disabled={followingInProgress.some(el => el == user.id)} onClick={
                        user.followed ? () => unfollow(user.id) : () => follow(user.id)
                    }>{user.followed ? 'Unfollow' : 'Follow'}</button>
                </div>
            </div>
            <div className={s.infoContainer}>
                <div className={s.personContainer}>
                    <div>{user.name}</div>
                    <div className={s.status}>{user.status}</div>
                </div>
                <div className={s.location}>{user.location}</div>
            </div>
        </div>
    )
}

export default User;