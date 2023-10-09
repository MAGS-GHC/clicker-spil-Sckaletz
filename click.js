let cookies = 0;
let isDouble = false;

function UpdateCookieCounter(){
    document.getElementById("clicks").innerHTML = `${cookies} cookies`;
    document.title = `${cookies} cookies - Clicker Spil`
}

function Click(){
    if (isDouble === true){
        cookies+=2;
    } else{
        cookies++;
    }
    UpdateCookieCounter();
}


function DoubleCookies(){
    if (isDouble === false){
        if (cookies >= 10){
            cookies-=5;
            isDouble = true;
            UpdateCookieCounter();
        }
    }
}