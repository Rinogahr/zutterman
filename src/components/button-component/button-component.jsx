import React from "react";
import ButtonStyle from '../button-component/button-component.module.css';



function ButtonComponentWeb({title, singleStyle, singClick}){
    return(
        <div className={ButtonStyle.btContainer} class={singleStyle}>
            <div className={ButtonStyle.btTitle} onClick={singClick}>{title}</div>
        </div>
    );
}

function ButtonComponentMobile({title, singleStyle, singClick}){
    return(
        <div className={ButtonStyle.btContainer} class={singleStyle}>
            <div onClick={singClick}>{title}</div>
        </div>
    );
}

export {ButtonComponentWeb, ButtonComponentMobile}