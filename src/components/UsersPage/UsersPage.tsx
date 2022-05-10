import React from "react";
import {usersSelector} from "../../store/usersSelector";
import {AppUseSelector} from "../../store/useSelector";
import {UserItem} from "./UserItem";
import {Preloader} from "../common/Preloader/Preloader";
import style from './UsersPage.module.scss'

export const UsersPage: React.FunctionComponent<PropsType> = (props) => {
    let users = AppUseSelector(usersSelector.users)
    let isLoading = AppUseSelector(usersSelector.isLoading)
    return <div className={style.usersContainer}>
        <h4>Users list</h4>
        {isLoading ? <Preloader /> :users.map(user => {
            return <UserItem user={user} key={user.id} />
        })}
        <span className={style.usersCount}>{users.length} users found</span>
    </div>
}

type PropsType = {}