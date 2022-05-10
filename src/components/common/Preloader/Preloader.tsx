import loader from '../../../assets/Rocket.gif'
import React from "react";
import style from './Preloader.module.scss'

export const Preloader: React.FunctionComponent<PropsType> = () => {
    return <div className={style.preloader}>
        <img src={loader} alt="loading..."/>
    </div>
}

type PropsType = {}