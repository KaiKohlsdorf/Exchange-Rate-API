export class ExchangeRate {  
  static async getExchangeRate(currencyFrom, currencyTo, currencyAmt) {
    let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currencyFrom}/${currencyTo}/${currencyAmt}`;
    return fetch(url)
    .then(function(response) {
      if(!response.ok) {
        throw Error(response.statusText);
      }       
      return response.json();
    })
    .catch(function(error) {
      return error;
    });
  }
}
