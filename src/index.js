import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Jupiter from "../src/Jupiter";
import Mars from "../src/Mars";
import Mercury from "../src/Mercury";
import Venus from "../src/Venus";

function clearResults () {
  $('#response').text("");
  $('#response2').text("");
  $('#response3').text("");
  $('#response4').text("");
  $('#response5').text("");
  $('#response6').text("");
  $('#response7').text("");
  $('#response8').text("");
}

$(document).ready(function() {  
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const age = parseInt($('#age').val()); 
    const expectancy = parseInt($('#expectancy').val()); 
    const mars = new Mars(age, expectancy);
    const marsAge = mars.MarsCalc();
    const marsExpectancy = mars.MarsLife();
    const venus = new Venus(age, expectancy);
    const venusAge = venus.VenusCalc();
    const venusExpectancy = venus.VenusLife();
    const mercury = new Mercury(age, expectancy);
    const mercuryAge = mercury.MercuryCalc();
    const mercuryExpectancy = mercury.MercuryLife();
    const jupiter = new Jupiter(age, expectancy);
    const jupiterAge = jupiter.JupiterCalc();
    const jupiterExpectancy = jupiter.JupiterLife();
    $('#response3').append(`<p>you are ${marsAge} on mars</p>`);
    $('#response2').append(`<p>you are ${venusAge} on Venus</p>`);
    $('#response').append(`<p>you are ${mercuryAge} on mercury</p>`);
    $('#response4').append(`<p>you are ${jupiterAge} on jupiter</p>`);
    $('#response7').append(`<p>you have ${marsExpectancy} on mars</p>`);
    $('#response6').append(`<p>you have ${venusExpectancy} on Venus</p>`);
    $('#response5').append(`<p>you have ${mercuryExpectancy} on Mercury</p>`);
    $('#response8').append(`<p>you have ${jupiterExpectancy} on Jupiter</p>`);
  });
});

$('#refresh').click(function() {
  clearResults();
});