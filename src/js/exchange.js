export class ExchangeRate {  
  static async getExchangeRate(currencyFrom, currencyTo, currencyAmt) {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currencyFrom}/${currencyTo}/${currencyAmt}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
  
  static async getList() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

export function convertMonies(currencyAmt, currencyTo, response) {
  if (response) {
    let result;

    for (let list in response) {
      if (list === currencyTo) {
        result = (currencyAmt * response[list]).toFixed(2);
      }
    }
    return result;
  }
}
