const nothing = document.getElementById("nothing")
const frameworkList = document.getElementById("framework_list")

chrome.tabs.query({
    active: true,
    currentWindow: true
}, function (tabs) {
    if (tabs[0].url.indexOf("chrome://") == 0) {
        return;
    }
    if (tabs[0].url.indexOf("file://") == 0) {
        return;
    }
    if (tabs[0].url.indexOf("about:") == 0) {
        return;
    }
    chrome.tabs.sendMessage(tabs[0].id, {
        type: "framework"
    }, function (response) {
        if (!response) return
        if (response.length > 0) {
            response.forEach(el => {
                const span = document.createElement("span")
                span.innerText = el
                span.className = "col-sm-12"
                frameworkList.appendChild(span)
            })
        } else {
            nothing.style.display = "block"
        }
    });
});