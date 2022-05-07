import React from "react";
import {UserType} from "../../types/types";
import style from './UserItem.module.scss'

export const UserItem: React.FunctionComponent<PropsType> = (props) => {
    return <div className={style.userItem}>
        <div>
            <p>Name: {props.user.name}</p>
            <p>Address: {props.user.address.city}</p>
            <p>Company: {props.user.company.name}</p>
        </div>
        <div>
            <a>More</a>
        </div>
    </div>
}

type PropsType = {
    user: UserType
}