(function () {

    const removeDupl = (arr) => arr.filter((v,i) => arr.indexOf(v) === i)

    const getRules = () => {
        return new Promise((res) => {
            if (typeof rulesJsonFramework !== 'undefined') {
                return res(rulesJsonFramework)
            } else {
                setTimeout(() => {
                    return getRules().then(res)
                }, 100)
            }
        })
    }

    const getCookie = (cname, value) => {
        let rv = false
        for(let idx in allCookies) {
            let cookie = allCookies[idx]
            if(cookie.name.toLowerCase() == cname.toLowerCase()) {
                if(value.length > 0) {
                    if(cookie.value.match(value)) {
                        rv = true
                        break
                    }
                } else {
                    rv = true
                    break
                }
            }
        }
        return rv;
    }

    const test = (name, obj) => {
        return new Promise((res) => {
            let rv = []
            let addInRv = () => {
                rv.push(name)
                if (obj.implies) {
                    if (typeof obj.implies == "string") {
                        rv.push(obj.implies)
                    } else {
                        rv.concat(obj.implies)
                    }
                }
            }
            if (obj.html) {
                if (document.body.innerHTML.match(obj.html)) {
                    addInRv()
                }
            }
            if (obj.js && rv.length == 0) {
                for(let idx in obj.js) {
                    const regex = obj.js[idx]
                    const properties = idx.split('.')
                    let value = window
                    for (let i = 0; i < properties.length; i++) {
                        const property = properties[i];
                        if (value && value.hasOwnProperty(property)) {
                            value = value[property];
                        } else {
                            value = null;
                            break;
                        }
                    }
                    if(typeof value === 'string' || typeof value === 'number') {
                        addInRv()
                        break;
                    }
                }
            }
            if (obj.cookies && rv.length == 0) {
                for(let cname in obj.cookies) {
                    let value = obj.cookies[cname]
                    if(getCookie(cname, value)) {
                        addInRv()
                        break;
                    }
                }
            }
            return res(rv)
        })
    }

    const testAll = (json) => {
        return new Promise((res) => {
            let promises = []
            let rv = []
            for (let idx in json) {
                let framework = json[idx]
                promises.push(test(idx, framework).then((arr) => {
                    if (arr.length > 0) {
                        rv = rv.concat(arr)
                    }
                }))
            }

            return Promise.all(promises).then(() => {
                return res(removeDupl(rv))
            })
        })
    }

    getRules().then(testAll).then((framework) => {
        window.postMessage({ action: 'GOT_FRAMEWORK', framework: framework },  window.location.href);
    })

})();