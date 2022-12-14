/* Script to update the current open lanes count, fluxs a bit for demo purposes. */

let numOfOpenLanes = Math.round(Math.random() * 8) + 3;
let demoFluxLanesEveryMax = 7; // Randomly change open lane count sometime between now and <max> seconds


updateOpenLanes();

function updateOpenLanes(){
    let msgHTML = "<i>Bowling Lanes are Currently Closed</i>"; 
    numOfOpenLanes += (Math.random() < 0.5 ? -1 : 1);
    numOfOpenLanes = Math.max(1, numOfOpenLanes);
    if(global_IsOpen){
        // could add flashing FX to draw attention to update
        msgHTML = "Currently " + numOfOpenLanes + " open lanes";
    }
    let openLanesElement = document.getElementById("open-lanes");
    openLanesElement.innerHTML = msgHTML;
    
    // For demoing purposes, flux open lanes count
    setTimeout(updateOpenLanes, Math.round(demoFluxLanesEveryMax * Math.random()) * 1000);
}