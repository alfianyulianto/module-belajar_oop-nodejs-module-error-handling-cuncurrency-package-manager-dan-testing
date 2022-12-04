// Async Await
// const getCoffee = () => {
//     return new Promise((resolve, reject) => {
//         const seeds = 10;
//         setTimeout(() => {
//             if (seeds >= 100) {
//                 resolve("Kopi didapatkan!");
//             } else {
//                 reject("Biji kopi habis!");
//             }
//         }, 1000);
//     })
// }
// // Dengan Asyn Await
// // async digunakan untuk menandakan bahwasannya ini berjalan secara asynchronouse
// async function makeCoffee(){ 
//     try{
//         const coffee = await getCoffee(); 
//         // await digunakan untuk menunggu proses getCoffee yang berjalan asynchronouse
//         console.log(coffee);
//     }catch(handleFailure){
//         console.log(handleFailure);
//     }
// }

// makeCoffee();

// chanining dan promises all

const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}
 
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};
 
const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};
 
const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log('Memanaskan air...');
    setTimeout(() => {
      resolve('Air panas sudah siap!');
    }, 2000);
  });
};
 
const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log('Menggiling biji kopi...');
    setTimeout(() => {
      resolve('Bubuk kopi sudah siap!');
    }, 1000);
  });
};

async function makeEspresso() {
    try {
        const avalable = await checkAvailability();
        const stock =  await checkStock();
        const coffee = await brewCoffee();
        console.log(avalable);
        console.log(stock);
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
makeEspresso();
 
 
/* output
Membuatkan kopi Anda...
Mesin kopi siap digunakan.
Stok cukup. Bisa membuat kopi.
Kopi sudah siap!

*/