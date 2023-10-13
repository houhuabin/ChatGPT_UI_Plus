import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./content";
import '../assets/css/tailwind.css'

function init() {
    const appContainer = document.createElement('div')
    //  document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    //const root = createRoot(appContainer)
    // root.render(<Content />);
}

init();