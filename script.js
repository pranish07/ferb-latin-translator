var inputTxt = document.querySelector("#txt-input");
var outputTxt = document.querySelector("#txt-output");
var btnTranslate = document.querySelector("#btn-translate");

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(text) {
  return serverUrl + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error occurs", error);
  alert("something wrong with the server , try again after sometime");
}

function clickHandler() {
  //taking input
  var inputValue = inputTxt.value;

  //calling server for processing
  fetch(getTranslationURL(inputValue))
    .then((response) => response.json())
    .then((json) =>{ 
      var translatedText= json.contents.translated; 
      outputTxt.innerText = translatedText; //output
      })
    .catch(errorHandler);

 
}

btnTranslate.addEventListener("click", clickHandler);
