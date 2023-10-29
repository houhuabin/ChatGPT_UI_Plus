import React from 'react'
import style from './setting-block.module.scss';


import { useDispatch } from 'react-redux';

import { showAuth } from '../redux/actions/userActions';
import UserSVG from '../../svg/UserSVG';

export default function SettingBlock() {

    const dispatch = useDispatch();
    const handUserClick = () => {
        console.log(" ==========setting click ==============");
        dispatch(showAuth());
    }
    return (

        <div className={style.leftBarBlock} >
            <div className={style.userContainer} onClick={handUserClick}>
                <UserSVG />
            </div>


        </div >


    )
}
