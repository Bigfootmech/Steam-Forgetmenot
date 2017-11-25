var domains = ["steamcommunity.com", "store.steampowered.com", "help.steampowered.com"]

function onError(error){
    console.log(error)
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

function saveCookiesForDomain(domain){
    console.log("For domain:'" + domain + "'");
    var promiseOfCookies = browser.cookies.getAll({domain: domain});
    promiseOfCookies.then(saveAllTheInterestingCookies);
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