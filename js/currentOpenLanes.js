// add lane flux every 10 seconds or so (flux by 1), to demo changing

let numOfOpenLanes = Math.round(Math.random() * 11) + 1;
let varianceMod = 0.25; // can flux 25% per update after random base (for demoing purposes)

$(document).ready(updateOpenLanes())

function updateOpenLanes(){
    let msgHTML = "<i>Bowling Lanes are Currently Closed</i>"; 
    //numOfOpenLanes *= (varianceMod * (Math.random() < 0.5 ? -1 : 1));
    if(global_IsOpen){
        msgHTML = "Currently " + numOfOpenLanes + " lanes open";
    }
    let openLanesElement = document.getElementById("open-lanes");
    // !!!!!! WHY DOES GETTING ELEMENT ABOVE SOMETIMES RETURN NULL? loaded after DOM... maybe, since hidden?
    // OHHH DUH !!! NEEED A SYSTEM INPLACE TO CHECK DYNAMICALLY LOAD()ED SNIPPETS!!!
    // guessing, sometimes, scripts load slightly faster than dynamically loaded HTML snippets.
    if(openLanesElement)
        openLanesElement.innerHTML = msgHTML;
}