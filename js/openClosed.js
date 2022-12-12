/* script to change open/closed text, 'digital signage' */

var global_IsOpen;

const htmlOpenTill10 = "<span><span class='open-color'>Open</span> till 10pm</span>";
const htmlOpenTill3 = "<span><span class='open-color'>Open</span> till 3am</span>";
const htmlClosed = "<span>Currently <span class='closed-color'>Closed</span></span>";

// ? Add infrequent 'refresh' to keep making functional after page load

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



    if(dayOfWeek == 0 || dayOfWeek >= 5){ // Sunday, Friday or Saturday - Open Late, so you can bowl great.™
        if(hourOfDay >= 12 || hourOfDay < 3){
            signSaying = htmlOpenTill3;
        }else{
            signSaying = htmlClosed;
        }
    }else{ // Typical hours
        if(hourOfDay < 15 || hourOfDay > 21){
            signSaying = htmlClosed;
        }
    }
    $("#open-closed").html(signSaying);
}