function Stackalyzer() {

    this.getBody = () => {
        return new Promise((res, rej) => {
            let body = document.getElementsByTagName('body')[0]
            if(!body) {
                setTimeout(() => {
                    return this.getBody().then(res)
                }, 100)
            } else {
                return res(body)
            }
        })
    }

    this.onMessage = (event) => {
        if (event.data.action !== 'GOT_FRAMEWORK') {
            return;
        }
        this.frameworkList = event.data.framework
        window.removeEventListener('message', this.onMessage);
    }

    this.init = () => {
        let _this = this

        this.getBody().then((body) => {
            _this.body = body

            _this.scriptInj = document.createElement("script")
            _this.scriptJson = document.createElement("script")
            _this.scriptJson.id = "rules-json"
            
            _this.scriptJson.src = "https://www.stackalyzer.com/rules.js"
            _this.scriptInj.src = chrome.extension.getURL('js/inject.js')

            chrome.runtime.sendMessage({type: "cookie", url: window.location.hostname}, () => {});
        })
        
        window.addEventListener('message', this.onMessage);

        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            switch(message.type) {
                case "framework":
                    sendResponse(this.frameworkList);
                    break;
                case "cookie":
                    const scriptCookie = document.createElement("script")
                    scriptCookie.innerText = 'const allCookies='+JSON.stringify(message.cookies)+';'
                    _this.body.appendChild(_this.scriptJson);
                    _this.body.appendChild(scriptCookie);
                    _this.body.appendChild(_this.scriptInj);
                    sendResponse();
                    break;
            }
        });
    }

    this.init()
}

Stackalyzer = new Stackalyzer()