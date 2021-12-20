var btn = document.querySelector("#button");
var Input = document.querySelector("#input");
var output = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    //console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {
    
    var inputText = Input.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var Text = json.contents.translated;
            output.innerText = Text;
        })
        .catch(errorHandler)

};

btn.addEventListener("click", clickHandler)


