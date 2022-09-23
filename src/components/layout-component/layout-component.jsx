import React from "react";
import Layout from '../layout-component/layout-component.module.css';
import {LogoComponentMobile,LogoComponentWeb} from '../logo-component/logo-component';
import {ButtonComponentWeb} from '../button-component/button-component';
import MenuMobileComponent from "../menu-mobile-component/menu-mobile-component";

export default function LayoutComponent(){
    return(
        <div className={Layout.container}>
            <div className={Layout.containerMenu}>
                <div className={Layout.menuMobile}>
                    <MenuMobileComponent/>
                   <LogoComponentMobile/> 
                </div>
                <div className={Layout.menuWeb}>
                    <LogoComponentWeb/>
                    <ButtonComponentWeb
                    title="ABOUT US"
                    singClick={teste}/>
                    <ButtonComponentWeb
                    title="MODELS"
                    singClick={teste2}/>
                    <ButtonComponentWeb
                    title="GUARANTEE"
                    singClick={teste3}/>
                </div>
            </div>
            <div className={Layout.containerLayoutUm}>2</div>
            <div className={Layout.containerLayoutDois}>3</div>
        </div>
    );

    function teste(){
        alert("ola mundo about us")
    }

    function teste2(){
        alert("ola mundo models")
    }

    function teste3(){
        alert("ola mundo guarantee")
    }
}