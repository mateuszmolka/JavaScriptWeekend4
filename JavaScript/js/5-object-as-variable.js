'use strict';
/*
Object
*/
var student= {
    imie: "Kaja",
    wzrost: 152,
    wyswietlDane: function(){
        console.log(this.imie);
        console.log(this.wzrost);
    }
}

student.wyswietlDane();