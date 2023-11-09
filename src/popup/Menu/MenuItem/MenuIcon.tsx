import React from 'react'

import DeleteSVG from '../../../svg/DeleteSVG';
import EditSVG from '../../../svg/EditSVG';
import { MenuBlockData } from '../Menu';
import style from './menu-icon.module.scss';
import AddSVG from '../../../svg/AddSVG';
import DuplicateSVG from '../../../svg/DuplicateSVG';
import LikeSVG from '../../../svg/LikeSVG';
import MoveSVG from '../../../svg/MoveSVG';
import UserSVG from '../../../svg/UserSVG';
import SignOutSVG from '../../../svg/SignOutSVG';
import StripeSVG from '../../../svg/StripeSVG';

export default function MenuIcon({ menuBlockData }: { menuBlockData: MenuBlockData }) {

    let SVGComponent;

    switch (menuBlockData.id) {
        case 1:
            SVGComponent = UserSVG;
            break;
        case 2:
            SVGComponent = SignOutSVG;
            break;
        case 3:
            SVGComponent = StripeSVG;
            break;
        case 4:
            SVGComponent = UserSVG;
            break;
        case 5:
            SVGComponent = LikeSVG;
            break;
        case 6:
            SVGComponent = MoveSVG;
            break;

        default:
            SVGComponent = DuplicateSVG;
    }
    return (
        <div className={style.icon}>
            <SVGComponent />
        </div>

    )
}
