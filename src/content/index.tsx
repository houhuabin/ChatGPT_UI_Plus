import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import Content from "./content";
import '../assets/css/tailwind.css'
import { useDispatch } from 'react-redux';
import { addChat, addNote } from "./redux/actions/noteActions";
import { NoteType } from "./redux/types/noteTypes";
import store from "./redux/Store";

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
    // const overlayContainer = document.createElement('div');
    // document.body.appendChild(overlayContainer);
    //const overlayRoot = createRoot(overlayContainer);
    //overlayRoot.render(<Overlay />);
    //console.log("mount overlay=================")

}

init();

//const dispatch = useDispatch();
function addNewChat(title, url, projectionID) {
    store.dispatch(addChat("note_chat", title, url, projectionID, NoteType.CHAT));
}


function getDataProjectionIDFromLi(elem) {

    if (elem && elem.parentElement && elem.parentElement.parentElement) {
        let grandParent = elem.parentElement.parentElement;
        let dataProjectionId = grandParent.getAttribute("data-projection-id");

        if (dataProjectionId) {
            // console.log(dataProjectionId);
            return dataProjectionId;

        } else {
            // console.log("The grandparent element does not have a 'data-projection-id' attribute.");
        }
    } else {
        //console.log("Parent or grandparent element not found.");
    }
    return null;
}

var observer = new MutationObserver(function (mutations) {
    // button 的父元素 container
    var element = document.querySelector('div[class="absolute flex right-1 z-10 dark:text-gray-300 text-gray-800 visible"]');
    if (element) {
        // 断开连接
        observer.disconnect();
        //elements.forEach(function (element) {
        const childCount = element.childElementCount;
        console.log(childCount);

        //防止不停添加，默认只有两个按钮一个删除一个编辑
        if (childCount < 3) {
            let button = getAddButton();
            element.appendChild(button);
            let projectionID = getDataProjectionIDFromLi(element);


            let firstDiv = element.previousElementSibling;
            let textContent = firstDiv.textContent;
            console.log(textContent.trim());
            let fullURL = window.location.href;

            button.addEventListener('click', () => addNewChat(textContent.trim(), fullURL, projectionID));

            console.log(fullURL);

        }
        //});

        // 重新连接
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: false
        });
    }
});

function getAddButton() {
    // 创建button元素
    const button = document.createElement('button');
    button.className = "p-1 hover:text-white plus-button-extension";

    // 创建svg元素
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "stroke", "currentColor");
    svg.setAttributeNS(null, "fill", "none");
    svg.setAttributeNS(null, "stroke-width", "2");
    svg.setAttributeNS(null, "viewBox", "0 0 24 24");
    svg.setAttributeNS(null, "stroke-linecap", "round");
    svg.setAttributeNS(null, "stroke-linejoin", "round");
    svg.classList.add("h-4", "w-4", "height-1em", "width-1em");

    // 创建第一个line元素
    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line1.setAttributeNS(null, "x1", "12");
    line1.setAttributeNS(null, "y1", "5");
    line1.setAttributeNS(null, "x2", "12");
    line1.setAttributeNS(null, "y2", "19");

    // 创建第二个line元素
    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line2.setAttributeNS(null, "x1", "5");
    line2.setAttributeNS(null, "y1", "12");
    line2.setAttributeNS(null, "x2", "19");
    line2.setAttributeNS(null, "y2", "12");

    // 将line元素添加到svg元素
    svg.appendChild(line1);
    svg.appendChild(line2);

    // 将svg元素添加到button元素
    button.appendChild(svg);

    // 返回创建的button元素
    return button;
}

observer.observe(document.body, {
    childList: true, // 观察直接子节点的更改
    subtree: true,   // 观察所有后代节点的更改
    attributes: false
});