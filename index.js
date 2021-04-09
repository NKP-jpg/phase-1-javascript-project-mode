const BASE_URL = "https://api.coingecko.com/api/v3/exchange_rates"
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("change", showMeTheMoney)
})

function showMeTheMoney() {
  let chosenCurrency = event.target.value
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const currencies = Object.values(data.rates);
      const filteredCurrencies = currencies.filter(currency => currency.type === chosenCurrency)
      console.log(filteredCurrencies)

      //iterate through currency and place in proper container
      array.forEach(chosenCurrency => {


      });

      //Find the container where we attach everything to
      const currencyUl = document.querySelector('#container');

      //Create all necessary elements
      const cryptoList = document.createElement('li');
      const fiatList = document.createElement('li');
      const commodotiesList = document.createElement('li');

      //Add appropriate classes and ids. Grab data and insert if needed.
      // cryptoList.className = "Crypto"
      // fiatList.classList = "Fiat"
      // commodotiesList.classList = "Commodities"


      //Append everything to main container

    })
}


