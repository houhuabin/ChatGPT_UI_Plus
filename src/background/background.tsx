

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(" linsine---------");
    if (request.action === "getAuthToken") {
        console.log("get message  getAuthToken---------");
        chrome.identity.getAuthToken({ interactive: true }, function (token) {
            // 发送response回content script
            if (chrome.runtime.lastError) {
                sendResponse({ token: null, error: chrome.runtime.lastError });
            } else {
                sendResponse({ token: token });
            }
        });
        return true; // 表示我们会异步发送response
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "updateTab") {
        // 使用 chrome.tabs.update 来更新标签页
        chrome.tabs.update(sender.tab.id, { url: message.url }, (tab) => {
            // 可以选择发送回复给 content script
            sendResponse({ status: "Tab updated", tabId: tab.id });
        });
        return true; // 如果您想异步响应消息，返回 true
    }
});


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "openNewTab") {
        try {
            chrome.tabs.create({ url: message.url });
        } catch (error) {
            console.error("Error opening new tab:", error.message);
            // 这里可以添加额外的错误处理逻辑
        }
    }
});



