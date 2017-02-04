'use strict';


var imiona =['Waldek', 'Grzesiek', 'Marcin'];

imiona[3]='Krystyna';
imiona[4]='Malgorzata';

imiona.push('Mateusz');
imiona.pop();

console.log(imiona);
console.log(imiona.unshift('Robert'));
console.log(imiona);
console.log(imiona.shift());
console.log("-----------------------");


for (var i = imiona.length-1; i >= 0; i--){
    console.log(imiona[i]);
}

imiona.forEach(function(element,i){
    console.log('Element nr. '+ (i+1) +': '+element);
})

console.log("------");
console.log(imiona.join(" "));
console.log("------");
console.log(imiona.sort());

var imionaMęskie=['Damian','Michal'];

var zbiorImion= imiona.concat(imionaMęskie);

console.log(zbiorImion);

console.log(zbiorImion.indexOf('Damian'));

console.log(Array.isArray(zbiorImion));

//console.log(zbiorImion.slice(2,4));

console.log(zbiorImion);

console.log(zbiorImion.splice(1,1,'Jozek'));

console.log(zbiorImion);
var dupa=zbiorImion.toString();
console.log(dupa);






