var btnTranslate=document.querySelector(".btn-translate");
var inputTxt=document.querySelector(".input");
var outputTxt=document.querySelector("#output-txt");

// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl="https://api.funtranslations.com/translate/minion.json";

function getUrl(text){
    return serverUrl+"?"+"text="+text;
}
function callback(){
    
    fetch(getUrl(inputTxt.value))
        .then(res=>res.json())
        .then(json=> 
        outputTxt.innerText= json.contents.translated)
        .catch(error=>alert("error"));
}
btnTranslate.addEventListener("click",callback);