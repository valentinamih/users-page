import React from "react";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import style from "./FormControl.module.scss";
import {ValidatorType} from "../../formValidators/validator";

export const FormControl: React.FC<FormControlPropsType> = ({meta, children}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formField + ' ' + (hasError ? style.error : '')}>
            {children}
        </div>
    )
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <textarea  {...input} {...restProps}/> </FormControl>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}

export function createField(component: React.FC<WrappedFieldProps>,
                            validators: Array<ValidatorType>,
                            name: string,
                            placeholder: string | null,
                            disabled: boolean,
                            props = {}, text = '') {
    return <Field component={component}
                  validate={validators}
                  name={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  {...props}
    />
}

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}