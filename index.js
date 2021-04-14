document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#currency-select").addEventListener("change", showMeTheMoney)
})


function showMeTheMoney() {
  let chosenCurrency = event.target.value
  console.log(chosenCurrency)
  fetch("https://api.coingecko.com/api/v3/exchange_rates")
    .then(res => res.json())
    .then(data => {
      const currencies = Object.values(data.rates);
      const filteredCurrencies = currencies.filter(currency => currency.type === chosenCurrency)
      renderCurrencyList(filteredCurrencies)
      addListenersToLi()
      // showCurrencyValue()
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
    listItems[i].addEventListener("click", showCurrencyValue)
  }
}

//third helper function to display currency value
function showCurrencyValue() {
  let currencyList = document.querySelector(".currencyList")
  currencyList.innerHTML = ""
  let currencyValue = document.createElement('li')
  currencyValue.innerText = event.target.innerText + "-  Value: " + event.target.dataset.value
  // currencyValue.className = "value"
  // currencyValue.setAttribute("value", event.target.dataset.value)
  currencyList.appendChild(currencyValue)
}




