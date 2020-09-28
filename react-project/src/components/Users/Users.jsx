import React from 'react';
import s from './Users.module.css'
import Preloader from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";
import User from "./User/User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, followingInProgress, follow, unfollow, ...props}) => {

    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <div className={s.users}>

                <h2>Users</h2>

                <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>

                {
                    props.users.map(u => <User user={u} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}/>
                    )
                }
            </div>
        </>
    )
}

export default Users;