import React from "react";
import {useDispatch} from "react-redux";
import {getUsers} from "./store/usersSlice";
import {AppDispatch} from "./store/store";
import {Sidebar} from "./components/Sidebar/Sidebar";
import style from './App.module.scss'
import {UsersPage} from "./components/UsersPage/UsersPage";

type PropsType = {}

export const App: React.FunctionComponent<PropsType> = (props) => {
    let dispatch = useDispatch<AppDispatch>()
    dispatch(getUsers())
    return <div className={style.appWrapper}>
        <Sidebar />
        <UsersPage />
    </div>
}