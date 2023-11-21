
import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/css/tailwind.css'

import PlanDialog from "../content/Overlay/Plan/Plan";

function init() {
    const appContainer = document.createElement('div')
    document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer)
    console.log(appContainer)
    root.render(<PlanDialog />);
}

init();