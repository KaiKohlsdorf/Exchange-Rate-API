import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeRate } from './js/exchange.js';

// async function makeApiCall1(currencyFrom, currencyTo, currencyAmt) {
//   const response = await ExchangeRate.getExchangeRate(currencyFrom, currencyTo, currencyAmt);
// }

$(document).ready(function() {
  $('#exchange').click(function() {
    let currencyTo = $('#currency-to').val();
    let currencyFrom = $('#currency-from').val();
    let currencyAmt = $('#amount').val();
    // makeApiCall1(currencyFrom, currencyTo, currencyAmt);
    if (currencyAmt > 0) {
      ExchangeRate.getExchangeRate(currencyFrom, currencyTo, currencyAmt)
        .then(function() {
          $("#showAmt").html(currencyTo);
        });
    } else {
      $('.showErrors').text("You must input a positive number.");
    }
  });
});