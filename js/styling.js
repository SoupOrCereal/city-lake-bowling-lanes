/* Scripted Styling */

const startingHeaderHeight = "88%";
const tabletWidth = 988;

runLogic();

    window.addEventListener('resize', function(event) {
        runLogic();
    }, true);


function runLogic(){
    if(window.innerWidth > tabletWidth){ // Only style screens large enough to display the 'snapshot'
        performStyling();
    }else{
        performDeStyling(); // Destyling performed so site is fully responsive if window resized
    }
}

function performStyling(){
    // Set header height to fill page
    document.getElementsByTagName("header")[0].style.height = "100%";
    // Place footer-info onto header, for a 'snapshot' of key biz info
    document.getElementById("footer-info-placeholder").appendChild(document.getElementById("footer-info"));
    // Add a glassy BG to info for easier viewing over header image
    document.getElementById("footer-info").classList.add('header-snapshot');
}
function performDeStyling(){
    document.getElementsByTagName("header")[0].style.height = startingHeaderHeight;
    document.getElementById("footer-info-dock").appendChild(document.getElementById("footer-info"));
    document.getElementById("footer-info").classList.remove('header-snapshot');
}