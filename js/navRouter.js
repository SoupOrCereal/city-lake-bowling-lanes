/* Router that works with nearly any input! */

const triggerWords = ["league", "cosmic", "open"];
const mappedIDs = ["contentLeague", "contentCosmic", "contentOpen"];

const navBtnIDs = ["btnLeague", "btnCosmic", "btnOpen"]; // don't need to be mapped to triggerWords


// Register ClickEvent for Nav Links
navBtnIDs.forEach(id => {
    document.getElementById(id).onclick = navLinkClicked;
});
function navLinkClicked(){
    // Give it a moment for URL to reflect changes,
    //      IF run routing() as soon as button clicked, will read URL right before the URL changes, so, simply wait a split second
    setTimeout(figureOutRouting, 32);
}

figureOutRouting();

function figureOutRouting(){
    let currentURL = window.location.href.toLowerCase(); // could substring after ".com" if root domain includes trigger word, this was also works for local dev
    console.log(currentURL);
    let routeID = null;
    triggerWords.forEach(function(triggerWord, forIndex){
        if(currentURL.includes(triggerWord)){
            routeID = mappedIDs[forIndex];
        }
    });
    mappedIDs.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
    if(routeID){
        document.getElementById(routeID).style.display = "block";
    }
}

