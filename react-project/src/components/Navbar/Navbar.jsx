import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <nav className={s.navInner}>
                <div className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/profile">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/dialogs">Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/news">News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/music">Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/settings">Settings</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink activeClassName={s.activeLink} to="/users">Find users</NavLink>
                </div>
            </nav>

            {/*<Friends friends={props.friends}/>*/}
        </div>
    )
}

export default Navbar;