const BASE_URL = "https://api.coingecko.com/api/v3/exchange_rates"
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("change", showMeTheMoney)
})

function showMeTheMoney() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const currencies = Object.values(data.rates);
      let chosenCurrency = ""
      console.log(currencies)
      currencies.filter(currency => currency.type === chosenCurrency)

      //currencies.filter(currency => currency.type === "crypto")

      //Send JSON data into a callback function
      // seperate by data type
      // data.filter()
      //filter is confusing.  it is not a function so why the parentheses? do I place it in the currency function param?

      // for (const element of data) {

      //Find the container where we attach everything to
      const currencyUl = document.querySelector('#container');

      //Create all necessary elements
      const cryptoList = document.createElement('li');
      const fiatList = document.createElement('li');
      const commodotiesList = document.createElement('li');

      //Add appropriate classes and ids. Grab data and insert if needed.
      cryptoList.className = "Crypto"
      fiatList.classList = "Fiat"
      commodotiesList.classList = "Commodities"
      //how to grab data?

      //whatgoeshere?.dataset.id = element.id



      //Grab data and insert it into created elements
      //cryptoList.innerHTML? 

      //Append everything to main containe

    })

  // const cryptoList = document.getElementsByName("crypto")
  // // if (cryptoList == "Crypto")
  // console.log(cryptoList)

  // const fiatList = document.getElementsByName("fiat")
  // console.log(fiatList)

  // const commoditiesList = document.getElementsByName("commodities")
  // console.log(commoditiesList)

  // })
  // showMeTheMoney();
}


