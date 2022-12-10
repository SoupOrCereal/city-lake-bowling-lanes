// Works okay, BUT, NEED TO CONSIDER OPENING FRIDAY (atm, thur into friday at 1am == open, !wrong!)
// Also, think over Sun-Mon xfer

/* script to change open/closed text, 'digital signage' */

const htmlOpenTill10 = "<span><span class='open-color'>Open</span> till 10pm</span>";
const htmlOpenTill3 = "<span><span class='open-color'>Open</span> till 3am</span>";
const htmlClosed = "<span>Currently <span class='closed-color'>Closed</span></span>";

// ? Add infrequent 'refresh' to keep making functional after page load

updateOpenClosedSignage();
function updateOpenClosedSignage(){
    const tototodayJR = new Date();
    let dayOfWeek = tototodayJR.getDay();
    let hourOfDay = tototodayJR.getHours();
    let signSaying = htmlOpenTill10;
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