import React from 'react';
import papka from "../assets/icons/papka.svg";
import logo from "../assets/icons/logo.svg";
import themeCh from "../assets/icons/themeCh.svg";
import langCh from "../assets/icons/langCh.svg";
import '../App.scss';

export function Header() {
    return(
        <div className={'header'}>
            <div className={'papka'}>
                <a href={'/sendjson'}><img src={papka}/></a>
            </div>
            <div className={'logo'}>
                <a href={'/'}><img src={logo}/></a>
            </div>
            <div className={'buttons'}>
                <button><img src={themeCh}/></button>
                <button className={'lang'}><img src={langCh}/></button>
            </div>
        </div>
    );
}