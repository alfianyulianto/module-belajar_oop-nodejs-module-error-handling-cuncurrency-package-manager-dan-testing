const {coffeeStock, isCoffeeMachineReady} = require('./state.js');

// console.log(coffeeStock); // { arabica: 100, robusta: 150, liberica: 200 }
console.log(isCoffeeMachineReady); // true;

const makeCoffee = (type, milligrams) => {
	if(coffeeStock[type] >= milligrams){
		console.log('Kopi berhasil dibuat!');
	}else {
		console.log('Biji kopi habis!');
	}
}

makeCoffee("robusta", 80); // Kopi berhasil dibuat
