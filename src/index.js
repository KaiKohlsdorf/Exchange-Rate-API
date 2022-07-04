import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Template from './js/exchange.js';

async function makeApiCall() {
  const response = await fetch("https://v6.exchangerate-api.com/v6/{process.env.API_KEY}/latest/USD");
  const jsonifiedResponse = await response.json();
  return jsonifiedResponse;
}




    