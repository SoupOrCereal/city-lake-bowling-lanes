/* Site Router that works with nearly any given URL
*   /page, #page, .compage, ?page...
*/

const triggerWords = ["league", "cosmic", "open"]; // trigger words double as div IDs
const navBtnIDs = ["btnLeague", "btnCosmic", "btnOpen", "heading"];


// Register ClickEvent for Nav Links
navBtnIDs.forEach(id => {
    document.getElementById(id).onclick = navLinkClicked;
});
function navLinkClicked(e){
    setTimeout(figureOutRouting, 32); // Give it a split second for URL to reflect changes
}

figureOutRouting();

function figureOutRouting(){
    let currentURL = window.location.href.toLowerCase(); // substring after ".com" if root domain includes a trigger word
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
    // Image File Naming Convention is Formula "header-<triggerWord>.jpg"
    if(!routeID){ // home
        document.getElementsByTagName("header")[0].style.backgroundImage = "url('./img/header.jpeg')";
    }else{
        document.getElementsByTagName("header")[0].style.backgroundImage = "url('./img/header-"+triggerWords[triggerWords.indexOf(routeID)]+".jpg')";
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