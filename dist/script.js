const advice = document.getElementById("advice");
const adviceId = document.getElementById("advice-id");
const apiURL = "https://api.adviceslip.com/advice";
const reloadButton = document.getElementById("reload-button");

//Gets the quote from the API
function getQuote() {
  fetch(apiURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setQuote(data["slip"]["advice"], data["slip"]["id"]);
    });
}

//Sets the quote on in the browser
function setQuote(quote, Id) {
  advice.innerText = '"' + quote + '"';
  adviceId.innerText = "Advice # " + Id;
}

document.body.onload = getQuote;

reloadButton.addEventListener("click", function (e) {
  getQuote();
});
