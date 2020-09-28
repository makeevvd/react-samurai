import React from 'react';
import s from './Users.module.css'
import Preloader from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";
let defaultImageUrl = 'https://bit.ly/3jdsp2D';

let Paginator = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 6; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => props.onPageChanged(p)}>{p}</span>
            })
            }
        </div>)
}

export default Paginator;