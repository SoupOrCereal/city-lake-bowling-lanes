if(window.innerWidth > 960){ // Only style screens large enough to display the 'snapshot'
    performStyling();
}

function performStyling(){
    // Set header styling to 100% height
    document.getElementsByTagName("header")[0].style.height = "100%";

    // Place footer-info onto header, for a 'snapshot' of key biz info
    document.getElementById("footer-info-placeholder").appendChild(document.getElementById("footer-info"));

    // Add a glassy BG to info for easier viewing over header image
    document.getElementById("footer-info").style.background = "rgba(255, 255, 255, 0.25)";
    document.getElementById("footer-info").style.setProperty('backdrop-filter', 'blur(32px)');
}