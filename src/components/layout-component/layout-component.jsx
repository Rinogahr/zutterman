import React from "react";
import Layout from '../layout-component/layout-component.module.css';
import {LogoComponentMobile,LogoComponentWeb} from '../logo-component/logo-component';
import {ButtonComponentWeb} from '../button-component/button-component';
import MenuMobileComponent from "../menu-mobile-component/menu-mobile-component";
import Group5 from '../../img/Group5.png';
import Group6 from '../../img/Group6.png';
import Layer_1 from '../../img/Layer_1-2-1.png';
import Layer_2 from '../../img/Layer_1-2-2.png';
import Layer_3 from '../../img/Layer_1-2.png';

export default function LayoutComponent(){
    return(
        <div className={Layout.container}>

            <div className={Layout.menuTopo}>

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

            <div className={Layout.containerMainTopo}>
                
                <div className={Layout.containerMainTopoMobile}></div>
                
                <div className={Layout.containerMainTopoWeb}></div>

            </div>

            <div className={Layout.containerMainButton}>
                
                <div className={Layout.containerMainButtonMobile}></div>
                
                <div className={Layout.containerMainButtonWeb}></div>

            </div>

            <div className={Layout.containerMainFoot}>
                
                <div className={Layout.containerMainFootMobile}>
                    <div className={Layout.followUs}>
                       FOLLOW US 
                    </div>
                    <div className={Layout.containerRedes}>
                        <div>
                            <img src={Layer_1} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={Layer_2} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={Layer_3} alt="" srcset="" />
                        </div>
                    </div>
                    <div className={Layout.containerContact}>
                        CONTACT <br />
                        2490 Leisure Lane <br />
                        San Luis Obispo <br />
                        Califonia
                    </div>
                </div>

                <div className={Layout.containerMainFootWeb}>
                    <div className={Layout.followUs}>
                       FOLLOW US 
                    </div>
                    <div className={Layout.containerRedes}>
                        <div>
                            <img src={Layer_1} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={Layer_2} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={Layer_3} alt="" srcset="" />
                        </div>
                    </div>
                    <div className={Layout.containerContact}>
                        CONTACT <br />
                        2490 Leisure Lane <br />
                        San Luis Obispo <br />
                        Califonia
                    </div>
                </div>

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