WARNING: This firefox extension has the possibility to destroy your anonimity/anti tracking owing to the nature of it.
Specifically: It saves cookies, when you're otherwise eliminating cookies!
Now. With that braindead message out of the way.

This extension is supposed to help you manage Steam's ever so slightly overactive penchant to block you from using it.

It does this by storing specific cookies on the Steam website that are created for them to "remember your machine".

Of course, if you're a security nut, or techno-hillbillie like me, you'll already be deleting all your cookies every 
    time you close your browser.

There's a hitch.

What Steam does when it encounters a browser WITHOUT a cookie that "ensures it's your machine" (but that they pretend that 
    "your machine" ensures the cookie), is once you log on, 
    
    It will completely lock down your account from using the market in any way for 15 days. 
    
    Even if you only went on to the forums 
    (which are neither particularly easy to access from inside the steam browser, nor so much of a security issue).
    
Firefox, of course, also doesn't distinguish much between cookies, and they're all good, or they're all bad, with no real middle ground.
    This means that if you set Privacy settings to accept cookies from sites, but not 3rd party, and keep them until you close firefox 
    (a sensible setting):
    
    It will delete all of your cookies when you close firefox, and kick you from Steam market next time you log in.
    
    But!

    If you set an exception to allow ALL Steam cookies - to me what seem to be "overriding" this previous setting for steam.
        Making it more dangerous.
    And set it to clear everything on close, apart from cookies and site preferences (to do with exceptions)

    It will still clear the Steam cookies.
    
    Not much use then.
    
This extension is supposed to bridge that middle ground, by giving minimal cookie backup, in a way not expected by trackers.

Meaning that it WILL store cookies from Steam across firefox opening, closing, and generally blasting cookies. Just not all of them. 
    Or in the right place until you go back to the Steam website. Sadly, they are the most personally identifying ones though.
    
Currently, what I THINK this means is that: after you load the Steam website, and before you destroy the cookies,
    - Any plugins with the permissions for the Steam websites, and the cookies API, can use the cookies to track you.
    - Additionally, Steam can track you (their point).
    - But no other websites should be able to (any much more than they were previously able to, especially with noscript with 
        "blocking by default" turned on, and ghostery/privacy badger).

My first recommendation, is that you get the "Self-Destructing Cookies" extension. This will delete all the cookies from a site,
    once you leave it. This should mitigate part of the potential tracking, and this extension will still keep the cookies that
    you need safe, for once you reload the Steam websites.

If you're still not sure if all of the cookies have been destroyed, feel free to get something like CookieSwap to just nuke all 
    cookies mid-session with ease.

My second recommendation is that you clear the session before, and after visiting the steam website, while using this plugin.
    ie: Close, and open firefox (to the start page of about:blank). Resize the window.
    Like washing your hands.

Finally, if you want even more protection, look at something like Sandboxie. But in my opinion, this is slight overkill if it's 
    not already being used as standard.
    
Tested on its own, and with CookieSwap, and Self-Destructing Cookies.

Note: I probably spent more time on this "readme" than the code.