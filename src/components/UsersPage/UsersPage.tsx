import React from "react";
import {usersSelector} from "../../store/usersSelector";
import {AppUseSelector} from "../../store/useSelector";
import {UserItem} from "./UserItem";

export const UsersPage: React.FunctionComponent<PropsType> = (props) => {
    let users = AppUseSelector(usersSelector.users)
    console.log(users)
    return <div>
        <h3>Users list</h3>
        {users.map(user => {
            return <UserItem user={user} key={user.id}/>
        })}
    </div>
}

type PropsType = {}