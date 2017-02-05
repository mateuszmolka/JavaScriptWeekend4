'use strict';


var cars= {
    "cars":[
        {brand: "BMW", volume: 3000, power: 250 },
        {brand: "VW", volume: 1900, power: 140},
        {brand: "Audi", volume: 2700, power: 200},
        {brand: "Mercedes", volume: 6000, power: 500}
    ]
}

cars.cars.forEach(function(car,number){
    console.log(car.brand);
})