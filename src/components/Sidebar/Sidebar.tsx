import React from "react";
import style from './Sidebar.module.scss'
import {AppButton} from "../common/AppButton/AppButton";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {UserType} from "../../types/types";
import {AppUseSelector} from "../../store/useSelector";
import {usersSelector} from "../../store/usersSelector";
import {sortUsers} from "../../store/usersSlice";


export const Sidebar: React.FunctionComponent<PropsType> = (props) => {
    let dispatch = useDispatch<AppDispatch>()
    const sort = (filter: any) => {
        dispatch(sortUsers(filter))
    }
    return <div className={style.sidebar}>
        <aside className={style.sort}>
            <span>Sort</span>
            <AppButton buttonText={'by name'} onClickFunction={() => sort({
                filter: (user: UserType) => {
                    return user.name
                }
            })}/>
            <AppButton buttonText={'by city'} onClickFunction={() => sort( {
                filter: (user: UserType) => {
                    return user.address.city
                }
            })}/>
        </aside>
    </div>
}

type PropsType = {
}