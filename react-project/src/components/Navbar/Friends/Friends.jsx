import React from 'react';
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {

    let friendsElements = props.friends.map( f => <FriendItem id={f.id} name={f.name} profileImg={f.profileImg}/> );

    return (
        <div className={s.friendsContainer}>
            { friendsElements }
        </div>
    )
}

export default Friends;