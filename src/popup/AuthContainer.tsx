import React, { useEffect, useRef } from "react";
import style from './popup.module.scss';
import Auth from "../content/Auth/Auth";



const Popup = () => {


    return (
        <div className={style.popupContainer} >
            <Auth />
        </div>
    );
};

export default Popup;
