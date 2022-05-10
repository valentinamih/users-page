import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {getUser} from "../../store/usersSlice";
import {AppUseSelector} from "../../store/useSelector";
import {usersSelector} from "../../store/usersSelector";
import {Preloader} from "../common/Preloader/Preloader";
import {UserDataReduxForm} from "./UserDataForm";

export const UserPage: React.FunctionComponent<PropsType> = (props) => {
    const params = useParams()
    let dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getUser(Number(params.userId)))
    }, [dispatch])
    let [editMode, toggleEditMode] = useState(false)
    const formSubmit = (formData: any) => {
        console.log(JSON.stringify(formData))
        toggleEditMode(false)
    }
    let user = AppUseSelector(usersSelector.user)
    let isLoading = AppUseSelector(usersSelector.isLoading)
    return <div >
        {(isLoading || !user) ? <Preloader /> : <UserDataReduxForm initialValues={user}
                                                                   editMode={editMode}
                                                                   user={user}
                                                                   goToEditMode={() => toggleEditMode(true)}
                                                                   onSubmit={formSubmit}/>}
    </div>
}

type PropsType = {}