
import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/css/tailwind.css'
import Popup from "./AuthContainer";

import Auth from "../content/Auth/Auth";
import AuthContainer from "./AuthContainer";

function init() {
    const appContainer = document.createElement('div')
    document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer)
    console.log(appContainer)
    root.render(<AuthContainer />);
}

init();