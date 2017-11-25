var domains = ["steamcommunity.com", "store.steampowered.com", "help.steampowered.com"]

function onError(error){
    console.log(error)
}

function retrofit(cookie, domainName){
    cookie.domain = domainName
    cookie.url = "http://" + cookie.domain + "/"
    delete cookie.hostOnly
    delete cookie.session
    return cookie
}

function isCookieInteresting(cookie){
    return cookie.name === "steamRememberLogin" || cookie.name.includes("steamMachineAuth")
}

function rememberCookie(cookie){
    var storingNote = browser.storage.local.set({ [cookie.name] : cookie });
    storingNote.then(() => {}, onError)
}

function saveAllTheInterestingCookies(cookieList){
    for(let cookie of cookieList){
        if(isCookieInteresting(cookie)){
            console.log("Interesting cookie found:'" + cookie.name + "'");
            rememberCookie(cookie)
        }
    }
}

function fillAllTheCookies(cookiesByType){
    console.log("Local storage contained:'" + JSON.stringify(cookiesByType, null, 2) + "'");
    var cookies = Object.values(cookiesByType);
    for (let cookie of cookies) {
        for(let domainName of domains){
            browser.cookies.set(retrofit(cookie, domainName))
        }
    }
}

function saveCookiesForDomain(domain){
    console.log("For domain:'" + domain + "'");
    var promiseOfCookies = browser.cookies.getAll({domain: domain});
    promiseOfCookies.then(saveAllTheInterestingCookies);
}

function fillAll(){
    console.log("Filling");
    var myStoredCookies = browser.storage.local.get(null);
    myStoredCookies.then(fillAllTheCookies)
}

function sniffForCookies(){
    console.log("Sniffing");
    for(let domain of domains){
        saveCookiesForDomain(domain)
    }
}

function listener(request, sender){
    sniffForCookies()
    fillAll()
}

browser.runtime.onMessage.addListener(listener);