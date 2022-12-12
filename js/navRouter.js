/* Router that works with nearly any input! */

const triggerWords = ["league", "cosmic", "open"]; // also, IDs

const navBtnIDs = ["btnLeague", "btnCosmic", "btnOpen", "heading", "open-closed"]; // don't need to be mapped to triggerWords


// Register ClickEvent for Nav Links
navBtnIDs.forEach(id => {
    document.getElementById(id).onclick = navLinkClicked;
});
function navLinkClicked(e){
    // Give it a moment for URL to reflect changes,
    //      IF run routing() as soon as button clicked, will read URL right before the URL changes, so, simply wait a split second
    setTimeout(figureOutRouting, 32);
}

figureOutRouting();

function figureOutRouting(){
    let currentURL = window.location.href.toLowerCase(); // could substring after ".com" if root domain includes trigger word, this was also works for local dev
    let routeID = null;
    triggerWords.forEach(function(triggerWord, forIndex){
        if(currentURL.includes(triggerWord)){
            routeID = triggerWords[forIndex];
        }
    });
    triggerWords.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
    if(routeID){
        document.getElementById(routeID).style.display = "block";
        document.getElementById(routeID).scrollIntoView();
    }
    styleHeaaderImage(routeID);
    highligtNavLinks(currentURL);
}

function styleHeaaderImage(routeID){
    // Formula, image file name header-<triggerWord>.jpg
    if(!routeID){ // home
        document.getElementsByTagName("header")[0].style.backgroundImage = "url('../img/header.jpeg')";
        //document.getElementsByTagName("header")[0].style.height = "idk";
    }else{
        document.getElementsByTagName("header")[0].style.backgroundImage = "url('../img/header-"+triggerWords[triggerWords.indexOf(routeID)]+".jpg')";
        //document.getElementsByTagName("header")[0].style.height = "55%";
    }
}

function highligtNavLinks(currentURL){
    let navLinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
    for(navLink of navLinks){
        if(currentURL.includes(navLink.id.toLowerCase().substring(3))){ // current id naming convention is btn<Nav>
            document.getElementById(navLink.id).style.color = "darkslategrey";
            document.getElementById(navLink.id).style.textShadow = "0px 0px 8px whitesmoke";
        }else{
            document.getElementById(navLink.id).style.color = "whitesmoke";
            document.getElementById(navLink.id).style.textShadow = "unset";
        }
    }
}