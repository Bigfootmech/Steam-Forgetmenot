document.body.style.border = "5px solid red";

function onError(error){
    console.log(error);
}

function isCookieInteresting(cookie){
    return cookie.name === "steamLoginSecure" || cookie.name.includes("steamMachineAuth")
}

function rememberCookie(cookieTypeName, cookie) {
    var storingNote = browser.storage.local.set({ [cookieTypeName] : cookie });
    storingNote.then(() => {}, onError);
}

function fillAll(){
    var myPromisedCookies = browser.storage.local.get(null);
    myPromisedCookies.then((cookiesByType) => {
        
    }
}
function initialize() {
  var gettingAllStorageItems = browser.storage.local.get(null);
  gettingAllStorageItems.then((results) => {
    var noteKeys = Object.keys(results);
    for (let noteKey of noteKeys) {
      var curValue = results[noteKey];
      displayNote(noteKey,curValue);
    }
  }, onError);
}

function showCookiesForTab(tabs) {
    //get all cookies in the domain
    var promiseOfCookies = browser.cookies.getAll({url: tab.url});
    promiseOfCookies.then((cookies) => {
        for (let cookie of cookies) {
            let content = document.createTextNode(cookie.name + ": "+ cookie.value);
        }
    });
}


function bleppingHeck(tabs) {
  var gettingItem = browser.storage.local.get(noteTitle);
  gettingItem.then((result) => {
    var objTest = Object.keys(result);
    if(objTest.length < 1 && noteTitle !== '' && noteBody !== '') {
      inputTitle.value = '';
      inputBody.value = '';
      storeNote(noteTitle,noteBody);
    }
}, onError);



