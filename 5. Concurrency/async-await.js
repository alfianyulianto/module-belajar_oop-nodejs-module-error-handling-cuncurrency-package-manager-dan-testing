// Tanpa Async Await
const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}
// getCoffee()
//     .then(handleSuccess => {
//         console.log(handleSuccess);
//     })
//     .catch(handleFailure => {
//         console.log(handleFailure);
//     });


// Dengan Asyn Await
// async digunakan untuk menandakan bahwasannya ini berjalan secara asynchronouse
async function makeCoffee(){ 
    const coffee = await getCoffee(); 
    // await digunakan untuk menunggu proses getCoffee yang berjalan asynchronouse
    console.log(coffee);
}

makeCoffee();