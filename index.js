const BASE_URL = "https://api.coingecko.com/api/v3/exchange_rates"
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("change", showMeTheMoney)
})

function showMeTheMoney() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)

      //Send JSON data into a callback function
      function cryptoList(data) {
        data.filter()
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

        cryptoList.dataset.id = element.id



          //Grab data and insert it into created elements
          .innerHTML

        //Append everything to main container

      }


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


