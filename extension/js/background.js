

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(sender.url.indexOf("chrome://") == 0) {
        sendResponse()
    }
    if(sender.url.indexOf("file://") == 0) {
        sendResponse()
    }
    if(sender.url.indexOf("about:") == 0) {
        sendResponse()
    }
    if(request.type == "cookie") {
        sendResponse()
        chrome.cookies.getAll({ domain: request.url }, (cookies) => {
            cookies = cookies.map(el => {
                return {
                    name: el.name,
                    value: el.value
                }
            })
            chrome.tabs.sendMessage(sender.tab.id, {type:"cookie", cookies}, () =>{})
        })
    }
})
