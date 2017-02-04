'use strict';


var firstOne=3500;
var secondOne=5000;
var thirdOne=7500;

var suma=firstOne + secondOne + thirdOne;

function calculateTheMoney(firstOne, secondOne, thirdOne, wiek){
    var suma;
    suma= firstOne + secondOne + thirdOne;
    var osoba=[suma, wiek];
    return osoba;
}

console.log(calculateTheMoney(firstOne,secondOne,suma, 25));