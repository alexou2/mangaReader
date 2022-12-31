const { ipcRenderer } = require("electron");



// Frontend code
function sendToMain(){
    ipcRenderer.invoke("selectDir");
    console.log("Do the same thing")
}
