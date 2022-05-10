import React from "react";
import {UserType} from "../../types/types";
import style from './UserItem.module.scss'
import {NavLink} from "react-router-dom";

export const UserItem: React.FunctionComponent<PropsType> = (props) => {
    return <div className={style.userItem}>
        <div>
            <div className={style.userItemField}><span>Name: </span>{props.user.name}</div>
            <div className={style.userItemField}><span>Address: </span>{props.user.address.city}</div>
            <div className={style.userItemField}><span>Company: </span>{props.user.company.name}</div>
        </div>
        <div>
            <NavLink to={'/user/' + props.user.id} className={style.userItemLink}>
                More
            </NavLink>
        </div>
    </div>
}

type PropsType = {
    user: UserType
}