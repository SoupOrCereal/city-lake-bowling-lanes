/* Script to change open/closed text, 'digital signage' */

var global_IsOpen;

const htmlOpenTill10 = "<span><span class='open-color'>Open</span> till 10pm</span>";
const htmlOpenTill3 = "<span><span class='open-color'>Open</span> till 3am</span>";
const htmlClosed = "<span>Currently <span class='closed-color'>Closed</span></span>";

updateOpenClosedSignage();
function updateOpenClosedSignage(){
    const tototodayJR = new Date();
    let dayOfWeek = tototodayJR.getDay() + 1;
    let hourOfDay = tototodayJR.getHours() + 1;
    let signSaying;
    // 'weekend hours' Fri Open till Sun Close (3am Mon)
    if((dayOfWeek == 5 && hourOfDay >= 13) || //Fri
        (dayOfWeek == 6 && (hourOfDay < 3 || hourOfDay >= 13)) || // Sat
        (dayOfWeek == 7 && (hourOfDay < 3 || hourOfDay >= 13)) || // Sun
        (dayOfWeek == 1 && hourOfDay < 3)){ // Mon
            signSaying = htmlOpenTill3;
    }else{ // 'regular hours' (or closed)
        if(hourOfDay >= 16 && hourOfDay < 22){ // open
            signSaying = htmlOpenTill10; 
        }else{ // closed
            signSaying = htmlClosed;
        }
    }

    if(signSaying == htmlClosed){
        global_IsOpen = false;
    }else{
        global_IsOpen = true;
    }

    document.getElementById("open-closed").innerHTML = signSaying;

    // Infrequent updates to Open/Closed singage after page has loaded.
    setTimeout(updateOpenClosedSignage, 2 * 60 * 1000); 
}