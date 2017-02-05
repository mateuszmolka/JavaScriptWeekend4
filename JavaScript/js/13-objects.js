'use strict';


//var Kaja= {
//    name: "Kaja",
//    height: 150,
//    introduceYourself: function(){
//        console.log("My name is "+this.name+".")
//    }
//}
//var Krystian={
//    name: "Krystian",
//    height: 180,
//    introduceYourself: function(){
//        console.log("My name is "+this.name+".")
//    }
//}
//Kaja.introduceYourself();
//Krystian.introduceYourself();
//
/*
function Person(name,surname){
    this.name=name;
    this.surname=surname;
    this.height;
    this.eyecolor;
    this.printInfo=function(){
        console.log("Name: "+this.name+ "\n"
                   + "Surname: "+this.surname+ "\n"
                   + "Height: "+this.height+ "\n"
                   + "Eyecolor: "+this.eyecolor+ "\n"
                  )
    }
}

var Mateusz= new Person("Mateusz", "Molka");
Mateusz.height=180;
Mateusz.eyecolor="blue";
Mateusz.printInfo();

console.log(Mateusz);

var Kaja= new Person("Kaja", "Stefaniak");

Kaja.printInfo();*/

function Car(brand){
    this.brand= brand;
    this.volume;
    this.power;
    this.showParameters= function(){
        console.log("Car parameters are: "+
                   "Brand: "+this.brand+ "\n"+
                   "Volume: "+this.volume+ " cm3\n"+
                   "Power: "+this.power+ " PS\n")
    }
}

var cars = new Array();

var vwPassat= new Car("VW");     
vwPassat.volume= 2500;
vwPassat.power=150;
cars.push(vwPassat);
        
var bmw530= new Car("BMW");     
bmw530.volume= 3000;
bmw530.power=270;
cars.push(bmw530);

var audiA6= new Car("Audi");     
audiA6.volume= 4200;
audiA6.power=300;
cars.push(audiA6);

var fordMustang= new Car("Ford");     
fordMustang.volume= 8000;
fordMustang.power=500;
cars.push(fordMustang);
        

cars.forEach(function(car,number){
    car.showParameters();
    console.log("Car number: "+ (number+1));
})








