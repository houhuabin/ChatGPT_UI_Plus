import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import Content from "./content";


import { addChat, addNote } from "./redux/actions/noteActions";
import { NoteType } from "./redux/types/noteTypes";
import store from "./redux/Store";
import { clearUserInfo, setUserInfo } from "./redux/actions/appActions";
/*
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // 检查消息类型
        if (request.type === "user_info") {
            // 处理用户信息
            const userInfo = request.data;
            console.log("Received user info:", userInfo);
            store.dispatch(setUserInfo(userInfo));
            // 可选：返回响应到发送消息的脚本
            sendResponse({ status: "User info received successfully" });
        } else if (request.type === "user_logout") {
            // 处理用户登出
            console.log("Received user logout message");
            // 你可以在这里进行一些清理工作，例如清除用户信息、更新UI等
            store.dispatch(clearUserInfo());  // 假设你有一个clearUserInfo的action来清除用户信息
            // 可选：返回响应到发送消息的脚本
            sendResponse({ status: "User logout processed successfully" });
        }
    }
);*/


function init() {
    let appMounted = false;
    const appContainer = document.createElement('div');

    const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // const targetDiv = document.querySelector('.mb-1.flex.flex-row.gap-2');
                const targetDiv = document.querySelector('.flex.flex-col.gap-2.pb-2.dark\\:text-gray-100.text-gray-800.text-sm');

                if (targetDiv && !appMounted) {
                    targetDiv.insertAdjacentElement('afterbegin', appContainer);
                    const contentRoot = createRoot(appContainer);
                    contentRoot.render(<Content />);
                    appMounted = true;
                } else if (!targetDiv && appMounted) {
                    // 检查appContainer是否还在DOM中
                    if (!document.body.contains(appContainer)) {
                        appMounted = false;
                    }
                }
            }
        }
    };

    const observer = new MutationObserver(callback);
    const config = { childList: true, subtree: true };
    const targetNode = document.body;

    observer.observe(targetNode, config);
}

init();



//const dispatch = useDispatch();
function addNewChat(title, url, liID) {

    store.dispatch(addChat("note_chat", title, url, liID, NoteType.CHAT));
}


function getDataProjectionIDFromLi(elem) {

    //if (elem && elem.parentElement && elem.parentElement.parentElement) {
    if (elem) {
        //let grandParent = elem.parentElement.parentElement;
        let dataProjectionId = elem.getAttribute("data-projection-id");

        if (dataProjectionId) {
            console.log("==dataProjectionId==", dataProjectionId);
            return dataProjectionId;

        } else {
            // console.log("The grandparent element does not have a 'data-projection-id' attribute.");
        }
    } else {
        //console.log("Parent or grandparent element not found.");
    }
    return null;
}


//add button at the chat history
var observer = new MutationObserver(function (mutations) {
    // button 的父元素 container
    //var rightButton = document.querySelector('button.absolute.bottom-0.right-0.top-0.flex.w-9.items-center.justify-center.rounded-lg.text-token-text-tertiary.transition.hover\\:text-token-text-secondary.radix-state-open\\:text-token-text-secondary');
    let menuElement = document.querySelector('.mt-2.min-w-\\[200px\\].max-w-xs.rounded-lg.border.border-gray-100.bg-token-surface-primary.shadow-lg.dark\\:border-gray-700');




    // if (rightButton) {
    //  var element = rightButton.parentElement
    if (menuElement) {
        let linkElement = document.querySelector('a.flex.items-center.gap-2.rounded-lg.p-2.bg-token-surface-primary');
        let liID = linkElement.getAttribute('href');

        // console.log("==liID==  ", liID);
        let textDiv = linkElement.children[0];
        let textContent = textDiv.textContent;
        // 断开连接
        observer.disconnect();
        //elements.forEach(function (element) {
        const childCount = menuElement.childElementCount;
        //console.log(childCount);

        //防止不停添加，默认只有两个按钮一个删除一个编辑、*

        if (childCount < 4) {
            let menuItem = getAddChatMenuItem();
            menuElement.appendChild(menuItem);
            //let projectionID = getDataProjectionIDFromLi(element);


            //let firstDiv = element.previousElementSibling;
            //let textContent = firstDiv.textContent;
            //console.log(textContent.trim());
            let fullURL = window.location.href;

            menuItem.addEventListener('click', () => {
                // 添加新的聊天
                addNewChat(textContent.trim(), fullURL, liID);
                // 定义一个函数来创建和派发鼠标事件
                function triggerMouseEvent(node, eventType) {
                    var event = new MouseEvent(eventType, {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        buttons: 1 // 表示左键点击
                    });
                    node.dispatchEvent(event);
                }

                // 获取目标元素，这里假设是 document，但可以是任何元素
                var target = linkElement;

                // 模拟鼠标点击过程
                // triggerMouseEvent(target, 'mousedown');
                // triggerMouseEvent(target, 'mouseup');
                //  triggerMouseEvent(target, 'click');


            });

            // console.log(fullURL);

        }
        //});

        // 重新连接
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: false
        });
    }
    //}
});

// 如果你想停止监听，可以使用以下代码
// window.removeEventListener('click', handleClickEvent);

// 如果你想停止监听，可以使用以下代码
// unmonitorEvents(window, 'click');
// window.removeEventListener('click', handleClickEvent);


function getAddChatMenuItem() {
    // 创建div元素
    let div = document.createElement("div");
    div.setAttribute("role", "menuitem");
    div.setAttribute("tabindex", "-1");
    div.setAttribute("data-orientation", "vertical");
    div.setAttribute("data-radix-collection-item", "");
    div.className = "flex gap-2 m-1.5 rounded px-5 py-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-black/5 dark:hover:bg-white/5 radix-disabled:pointer-events-none radix-disabled:opacity-50 group";

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



    // 将svg和文本添加到div中
    div.appendChild(svg);
    div.appendChild(document.createTextNode("Add to chat Block"));

    // 将div添加到文档的body或者其他特定的元素中
    return div;
}

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