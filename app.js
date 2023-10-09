let cookies = 0;

let multiplierCookies = {
    level1: 1,
    level2: 2,
    level3: 4,
    level4: 8,
    level5: 16,
    level6: 32,
    level7: 64,
    level8: 128,
    level9: 256,
    level10: 512,
}

let multiplierCookiePrice = {
    level2Price: 10,
    level3Price: 100,
    level4Price: 1000,
    level5Price: 10000,
    level6Price: 100000,
    level7Price: 1000000,
    level8Price: 10000000,
    level9Price: 100000000,
    level10Price: 100000000,
}

let cookieMultiplier = multiplierCookies.level1;

function UpdateCookieCounter() {
    document.getElementById("cookies").innerHTML = `${cookies} cookies`;
    document.title = `${cookies} cookies - Clicker Spil`;
}

function ClickOnCookie() {
    cookies += cookieMultiplier;
    UpdateCookieCounter();
}

function DoubleCookies() {
    if (cookieMultiplier === multiplierCookies.level1) {
        if (cookies >= multiplierCookiePrice.level2Price) {
            cookies -= multiplierCookiePrice.level2Price;
            document.getElementById("cookieknap").innerHTML = `4 x Cookies`;
            cookieMultiplier = multiplierCookies.level2;
        }
    } else if (cookieMultiplier === multiplierCookies.level2) {
        if (cookies >= multiplierCookiePrice.level3Price) {
            cookies -= multiplierCookiePrice.level3Price;
            document.getElementById("cookieknap").innerHTML = `8 x Cookies`;
            cookieMultiplier = multiplierCookies.level3;
        }
    } else if (cookieMultiplier === multiplierCookies.level3) {
        if (cookies >= multiplierCookiePrice.level4Price) {
            cookies -= multiplierCookiePrice.level4Price;
            document.getElementById("cookieknap").innerHTML = `16 x Cookies`;
            cookieMultiplier = multiplierCookies.level4;
        }
        //Level 5
    } else if (cookieMultiplier === multiplierCookies.level4) {
        if (cookies >= multiplierCookiePrice.level5Price) {
            cookies -= multiplierCookiePrice.level5Price;
            document.getElementById("cookieknap").innerHTML = `32 x Cookies`;
            cookieMultiplier = multiplierCookies.level5;
        }
        //Level 6
    } else if (cookieMultiplier === multiplierCookies.level5) {
        if (cookies >= multiplierCookiePrice.level6Price) {
            cookies -= multiplierCookiePrice.level6Price;
            document.getElementById("cookieknap").innerHTML = `64 x Cookies`;
            cookieMultiplier = multiplierCookies.level6;
        }
        //Level 7
    } else if (cookieMultiplier === multiplierCookies.level6) {
        if (cookies >= multiplierCookiePrice.level7Price) {
            cookies -= multiplierCookiePrice.level7Price;
            document.getElementById("cookieknap").innerHTML = `128 x Cookies`;
            cookieMultiplier = multiplierCookies.level7;
        }
        //Level 8
    } else if (cookieMultiplier === multiplierCookies.level7) {
        if (cookies >= multiplierCookiePrice.level8Price) {
            cookies -= multiplierCookiePrice.level8Price;
            document.getElementById("cookieknap").innerHTML = `256 x Cookies`;
            cookieMultiplier = multiplierCookies.level8;
        }
        //Level 9
    } else if (cookieMultiplier === multiplierCookies.level8) {
        if (cookies >= multiplierCookiePrice.level9Price) {
            cookies -= multiplierCookiePrice.level9Price;
            document.getElementById("cookieknap").innerHTML = `512 x Cookies`;
            cookieMultiplier = multiplierCookies.level9;
        }
    }
    UpdateCookieCounter();
}