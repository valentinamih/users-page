import React from "react";
import {UserType} from "../../types/types";
import {InjectedFormProps, reduxForm} from 'redux-form';
import {AppButton} from "../common/AppButton/AppButton";
import style from './UserDataForm.module.scss'
import {required} from "../../formValidators/validator";
import {createField, Input, Textarea} from "../FormControl/FormInput";

const UserDataForm: React.FunctionComponent<InjectedFormProps<UserType, PropsType> & PropsType> = (props) => {
    return <div className={style.userDataContainer}>
        <div className={style.userDataHeader}>
            <h4>User profile</h4>
            <AppButton buttonText={'Edit'} onClickFunction={() => props.goToEditMode()}/>
        </div>
        <form onSubmit={props.handleSubmit} className={style.userForm}>
            <div className={style.userFormFields}>
                <div className={style.userFormField}>
                    Name: {createField(Input, [required], 'name', props.user.name, !props.editMode)}
                </div>
                <div className={style.userFormField}>
                    User name: {createField(Input, [required], 'username', props.user.username, !props.editMode)}
                </div>
                <div className={style.userFormField}>
                    E-mail: {createField(Input, [required], 'email', props.user.email, !props.editMode)}
                </div>
                <div className={style.userFormField}>
                    Street: {createField(Input, [required], 'street', props.user.address.street, !props.editMode)}
                </div>
                <div className={style.userFormField}>
                    City: {createField(Input, [required], 'city', props.user.address.city, !props.editMode)}
                </div>
                <div className={style.userFormField}>
                    Zip code: {createField(Input, [required], 'zipCode', props.user.address.zipcode, !props.editMode)}
                </div>
                <div className={style.userFormField}>
                    Phone: {createField(Input, [required], 'phone', props.user.phone, !props.editMode)}
                </div>
                <div className={style.userFormField}>
                    Website: {createField(Input, [required], 'website', props.user.website, !props.editMode)}
                </div>
                <div className={style.userFormField}>
                    Comment {createField(Textarea, [], 'comment', '', !props.editMode)}
                </div>
            </div>
            <button className={style.submitFormButton} type="submit" disabled={!props.editMode}>Submit</button>
        </form>
    </div>

}

export const UserDataReduxForm = reduxForm<UserType, PropsType>({
    form: 'user',
})(UserDataForm);

type PropsType = {
    user: UserType
    editMode: boolean
    goToEditMode: () => void
}
