'use strict';

var liczba1=8;
var liczba2=10;
var wynik;

function dodajLiczby(skladowa1, skladowa2){
    var wynikDodawania;
    wynikDodawania= skladowa1+skladowa2;
    return wynikDodawania;
}

dodajLiczby(liczba1,liczba2);

wynik= dodajLiczby(liczba1,liczba2);

console.log(wynik);

function multiplyThree(number1, number2, number3){
    return number1*number2*number3; 
}

function checker(param){
    (param>=0) ? console.log(param) : document.write(param);
}
checker(multiplyThree(5,-4,5));



console.log("-----Fibonaczczi----")
var howMany=120;

function fibonFunction(howMany){
    var result;
    if(howMany==1){
        return 0;
    }else if(howMany==2){
        return 1;
    }else{
        var mainArray= new Array(howMany);
        mainArray[0]=0;
        mainArray[1]=1;
        for (var i=2; i<=howMany;i++){
            mainArray[i]=mainArray[i-1]+mainArray[i-2];
        }
       return mainArray[mainArray.length-1]; 
    }
}
console.log(Math.round(fibonFunction(howMany)*100)/100);



