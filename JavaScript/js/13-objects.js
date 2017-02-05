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

Kaja.printInfo();





