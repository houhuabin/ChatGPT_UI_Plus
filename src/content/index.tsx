import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./content";
import '../assets/css/tailwind.css'
import Overlay from "./Overlay/Overlay";


function init() {




    // mount Content to the ChatGPTside bar, new Chat div
    const appContainer = document.createElement('div')

    const targetDiv = document.querySelector('.mb-1.flex.flex-row.gap-2');
    if (!targetDiv) {
        throw new Error("Can not find New Chat element in chatgpt");
    }
    targetDiv.insertAdjacentElement('afterend', appContainer);
    const contentRoot = createRoot(appContainer);
    contentRoot.render(<Content />);




    // mount Overlay to body
    const overlayContainer = document.createElement('div');
    document.body.appendChild(overlayContainer);
    const overlayRoot = createRoot(overlayContainer);
    overlayRoot.render(<Overlay />);
    //console.log("mount overlay=================")

}

init();