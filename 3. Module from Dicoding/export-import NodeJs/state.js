const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200
}
 

// module.exports = coffeeStock;

// console.log(module); 
/*
Module {
  id: '.',
  path: 'D:\\Document\\upgrades\\21. Module from Dicoding',
  exports: { arabica: 100, robusta: 150, liberica: 200 },
  filename: 'D:\\Document\\upgrades\\21. Module from Dicoding\\state.js',
  loaded: false,
  children: [],
  paths: [
    'D:\\Document\\upgrades\\21. Module from Dicoding\\node_modules',
    'D:\\Document\\upgrades\\node_modules',
    'D:\\Document\\node_modules',
    'D:\\node_modules'
  ]
}
*/

const isCoffeeMachineReady = true;

module.exports = {coffeeStock, isCoffeeMachineReady};
console.log(module);
/*
Module {
  id: '.',
  path: 'D:\\Document\\upgrades\\21. Module from Dicoding',
  exports: {
    coffeeStock: { arabica: 100, robusta: 150, liberica: 200 },
    isCoffeeMachineReady: true
  },
  filename: 'D:\\Document\\upgrades\\21. Module from Dicoding\\state.js',
  loaded: false,
  children: [],
  paths: [
    'D:\\Document\\upgrades\\21. Module from Dicoding\\node_modules',
    'D:\\Document\\upgrades\\node_modules',
    'D:\\Document\\node_modules',
    'D:\\node_modules'
  ]
}
*/
