'use strict';

/*
warunek IF
*/

var wzrostMateusza=190;
var wzrostKaji=152;
var kolor="asdasd";

if(wzrostKaji<wzrostMateusza){
    console.log("Kaja niższa od Mateusza");
}

if(wzrostKaji>wzrostMateusza){
    console.log("Kaja jest wyższa od Mateusza");
}else{
    console.log("Kaja jest niższa ;)");
}

if(wzrostKaji>wzrostMateusza){
    console.log("Kaja jest wyższa od Mateusza");
}else if(wzrostKaji == wzrostMateusza){
    console.log("Jesteśmy równi");
}
else{
    console.log("Kaja jest niższa ;)");
}


switch(kolor){
    case 'czerwony':
        console.log("Kolor czerwony");
        break;
    case 'zielonyczarny':
        console.log("Kolor zielony czarny");
        break;
    case 'czarny':
        console.log("Kolor czarny");
        break;
    default:
        console.log("Inny");
        break;
        
}