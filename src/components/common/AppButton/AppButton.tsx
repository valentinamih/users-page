import React from "react";
import style from './AppButton.module.scss'

export const AppButton: React.FunctionComponent<PropsType> = (props) => {
    return <div>
        <button className={style.appButton} onClick={() => props.onClickFunction()}>{props.buttonText}</button>
    </div>
}

type PropsType = {
    buttonText: string
    onClickFunction: () => void
}