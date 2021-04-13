const BASE_URL = "https://api.coingecko.com/api/v3/exchange_rates"
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#currency-select").addEventListener("change", showMeTheMoney)
})


function showMeTheMoney() {
  let chosenCurrency = event.target.value
  console.log(chosenCurrency)
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const currencies = Object.values(data.rates);
      const filteredCurrencies = currencies.filter(currency => currency.type === chosenCurrency)
      renderCurrencyList(filteredCurrencies)
      addListenersToLi()
      console.log(filteredCurrencies)
    })
}
//helper function to render currency list
function renderCurrencyList(list) {
  let currencyList = document.querySelector(".currencyList")
  currencyList.innerHTML = ""
  for (let i = 0; i < list.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = list[i].name
    listItem.className = "investment-options"
    listItem.setAttribute("data-value", list[i].value)
    currencyList.appendChild(listItem)
  }
}

//second helper function to add event listeners
function addListenersToLi() {
  const listItems = document.querySelectorAll(".investment-options")
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function (event) {
      alert("value: " + event.target.dataset.value)
    })
  }
}
//third helper function to display currency value
function showCurrencyValue() {
  let currencyList = document.querySelector(".currencyList")
  currencyList.innerHTML = ""


}




