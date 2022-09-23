import React from "react";
import menuMobile from '../menu-mobile-component/menu-mobile-component.module.css';
import burguerMenuMb from '../../img/burguerMenuMb.png';
import {ButtonComponentMobile} from '../button-component/button-component';

export default function MenuMobileComponent(){
    return(
        <div className={menuMobile.MenuMobileContainer}>
            <div className={menuMobile.MenuMobileBurgueIcon}>
                <img src={burguerMenuMb} alt="" srcset="" />
            </div>
            <div>
                {/* <ButtonComponentMobile
                title="ABOUT US"
                singClick={teste}/>
                <ButtonComponentMobile
                title="MODELS"
                singClick={teste2}/>
                <ButtonComponentMobile
                title="GUARANTEE"
                singClick={teste3}/> */}
            </div>
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