import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/auth-reducer";

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://bit.ly/3hSJYVx" alt=""/>
        {props.isAuth ? <div className={s.loginBlock}>{props.login} - <button onClick={props.logout}>Log out</button></div> :
            <div>
            <NavLink to={'/login'}>
            <div className={s.loginBlock}>Login</div>
        </NavLink>
            </div>}

    </header>
}

export default Header;