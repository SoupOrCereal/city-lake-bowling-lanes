/* Methods for loading HTML and JS snippets */

/**
 * Load HTML/CSS from file into a given element 
 * @note load/execute JavaScript via LoadJS() or LoadQueueOfJS()
 * @param htmlFileName Name of HTML file to load (include .html extension)
 * @param elementID Load HTML file into this element
 */
function global_LoadHTML(htmlFileName, elementID){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById(elementID).innerHTML = this.responseText;
        //eval(document.getElementById(elementID).innerHTML);
        let scriptTags = document.getElementById(elementID).getElementsByTagName("script");
        if(scriptTags.length > 0){
            for(scriptTag of scriptTags){
                eval(scriptTag);
            }
        }
    }
    };
    xhttp.open("GET", htmlFileName);
    xhttp.send();
}

/**
 * Load and Execute a JavaScript file
 * @param jsFileName Name of JS file to load (include .js extension)
 */
 function global_LoadJS(jsFileName){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            window.eval(this.responseText);
        }
    };
    xhttp.open("GET", jsFileName);
    xhttp.send();
}

/**
 * Load and Execute a queue of JavaScript files in-order (ensures the scripts initial order of execution)
 * @param jsFileNames Array of the names of JS files to load (include .js extension)
 */
 function global_LoadQueueOfJS(jsFileNames){
    // For production, consider if this is called while currently processing a queue, okay for now
    currentIndexInQueue = -1;
    jsFilesQueue = jsFileNames;
    processJSqueue();
}
let currentIndexInQueue = -1;
let jsFilesQueue;
function processJSqueue(){
    if(currentIndexInQueue < 0){
        setTimeout(processJSqueue, 100); // crude 'fix' for rare occasions when dynamic JS loads before dynamic HTML, will add proper fix if I reuse this code.
        currentIndexInQueue = 0;
    }else{
        if(currentIndexInQueue <= jsFilesQueue.length-1){
            var jsFileName = jsFilesQueue[currentIndexInQueue];
            currentIndexInQueue++;
            
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    window.eval(this.responseText);
                    processJSqueue();
                }
            };
            xhttp.open("GET", jsFileName);
            xhttp.send();
        }
    }
}