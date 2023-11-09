/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./src/background/background.tsx ***!
  \***************************************/
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(" linsine---------");
    if (request.action === "getAuthToken") {
        console.log("get message  getAuthToken---------");
        chrome.identity.getAuthToken({ interactive: true }, function (token) {
            // 发送response回content script
            if (chrome.runtime.lastError) {
                sendResponse({ token: null, error: chrome.runtime.lastError });
            }
            else {
                sendResponse({ token: token });
            }
        });
        return true; // 表示我们会异步发送response
    }
});

/******/ })()
;
//# sourceMappingURL=background.js.map