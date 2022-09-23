import React from "react";
import logoStyle from '../logo-component/logo-component.module.css';
import logoMobile from '../../img/logoMobile.svg';
import logoWeb from '../../img/logoWeb.svg';

function LogoComponentWeb(){
    return(
        <div className={logoStyle.logoContainer}>
            <img className={logoStyle.logoImg} src={logoWeb} />
        </div>
    );
}


function LogoComponentMobile(){
    return(
        <div className={logoStyle.logoContainer}>
            <img className={logoStyle.logoImg} src={logoMobile} />
        </div>
    );
}


export {LogoComponentMobile,LogoComponentWeb}