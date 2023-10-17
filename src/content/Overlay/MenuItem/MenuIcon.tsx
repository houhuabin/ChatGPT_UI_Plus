import React from 'react'

import DeleteSVG from '../../../svg/DeleteSVG';
import EditSVG from '../../../svg/EditSVG';
import { MenuBlockData } from '../Menu/Menu';
import './menu-icon.scss';
import NewSVG from '../../../svg/NewSVG';
import DuplicateSVG from '../../../svg/DuplicateSVG';
import LikeSVG from '../../../svg/LikeSVG';
import MoveSVG from '../../../svg/MoveSVG';

export default function MenuIcon({ menuBlockData }: { menuBlockData: MenuBlockData }) {

    let SVGComponent;

    switch (menuBlockData.title) {
        case "Delete":
            SVGComponent = DeleteSVG;
            break;
        case "New":
            SVGComponent = NewSVG;
            break;
        case "Edit":
            SVGComponent = EditSVG;
            break;
        case "Duplicate":
            SVGComponent = DuplicateSVG;
            break;
        case "Add to favorites":
            SVGComponent = LikeSVG;
            break;
        case "Move to":
            SVGComponent = MoveSVG;
            break;

        default:
            SVGComponent = DuplicateSVG;
    }
    return (
        <div className='menu-icon'>
            <SVGComponent />
        </div>

    )
}
