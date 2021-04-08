const BASE_URL = "https://api.coingecko.com/api/v3/exchange_rates"
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("change", showMeTheMoney)
})

function showMeTheMoney() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      //how to sort data by type?
      // data.filter("type")?
      //How to grab id=currency-select?
      // const cryptoList = document.getElementsByName("crypto")
      const cryptoList = document.querySelector("value1")
      // if (cryptoList == "Crypto")
      console.log(cryptoList)
      const fiatList = document.getElementsByName("fiat")
      console.log(fiatList)

      const commoditiesList = document.getElementsByName("commodities")
      console.log(commoditiesList)

    })
  return showMeTheMoney;
}


