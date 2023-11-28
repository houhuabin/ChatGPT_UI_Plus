import React, { useEffect, useState } from 'react'


import style from '../overlay.module.scss'

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { hidePlanOverlay } from '../../redux/actions/planActions';

import PlanDialog from './PlanDialog';
// ... (其他引入)

// 增加一个新的参数：Component
export default function PlanOverlay() {
    const planData = useSelector((state: any) => {
        return state.plan;
    });


    const dispatch = useDispatch();

    const handleOverlayClick = () => {
        // console.log("hide overlay!!!!!!!!!!!!!!!!");
        dispatch(hidePlanOverlay());
    };

    if (!planData.showOverlay) {
        return null;
    }

    return (
        <div id="overlay" className={style.overlay} onClick={handleOverlayClick}>
            <div className={style.innerContainer}>

                <PlanDialog pointX={planData.pointX} pointY={planData.pointY} />

            </div>
        </div>
    )
}

