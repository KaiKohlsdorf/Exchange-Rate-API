import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeRate, convertMonies } from './js/exchange.js';

function getElements(response) {
  if (response.main) {
    $('.showRate').text('The exchange rate is ${response.main.}.');
    $('.showAmt').text('The currency amount is ${response.main.}.');
  } else {
    $('showErrors').text('There was an error: ${response}');
  }
}

async function makeApiCall1(currencyFrom, currencyTo, currencyAmt) {
  const response = await ExchangeRate.getExchangeRate(currencyFrom, currencyTo, currencyAmt);
  getElements(response);
}

async function makeApiCall2() {
  const response = await ExchangeRate.getList();
  getElements(response);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    let currencyTo = $('#currency-to').val();
    let currencyFrom = $('#currency-from').val();
    let currencyAmt = $('#amount').val();
    makeApiCall1(currencyFrom, currencyTo, currencyAmt);
    makeApiCall2();
  })
  
  function loadList() {
    const conversionOptions = {
      'AED': 'UAE Dirham - United Arab Emirates', 
      'AFN': 'Afghan Afghani - Afghanistan',
      'ALL': 'Albanian Lek - Albania', 
      'AMD': 'Armenian Dram - Armenia',	
      'ANG': 'Netherlands Antillian Guilder - Netherlands Antilles',
      'AOA':	'Angolan Kwanza - Angola',
      'ARS': 'Argentine Peso - Argentina', 
      'AUD': 'Australian Dollar - Australia', 
      'AWG': 'Aruban Florin - Aruba', 
      'AZN': 'Azerbaijani Manat - Azerbaijan', 
      'BAM': 'Bosnia and Herzegovina Mark - Bosnia and Herzegovina', 
      'BBD': 'Barbados Dollar - Barbados', 
      'BDT': 'Bangladeshi Taka - Bangladesh', 
      'BGN': 'Bulgarian Lev -	Bulgaria', 
      'BHD': 'Bahraini Dinar - Bahrain', 
      'BIF': 'Burundian Franc	- Burundi'
    };

    for (let list in currency) {

      $("#currencyFrom").append(`<option>${list}</option>`);
      $("#currencyTo").append(`<option>${list}</option>`);
    }
  }

  function displayResults(currencyTo) {
  try {
    if (result) {
     $("#showAmt").html(currencyTo);

     $("#error").hide();
     $("#results").slideDown();
    } else {
      throw new Error("The currency requested is not available.");
    }
  } catch (error) {
    displayError(error);
  }
}

  function displayError(error) {
    document.getElementsById("error");
    $("#results").hide();
    $("#error").slideDown();
  }
})