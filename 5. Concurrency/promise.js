const executorFunction = (resolve, reject) => {
	const isCoffeeMakerReady = true;
	if(isCoffeeMakerReady){
		resolve("Kopi berhasil dibuat");
	}else {
		reject("Mesin kopi tidak bisa digunakan");
	}
}

const makeCoffee = () => {
	return new Promise(executorFunction);
}
console.log(makeCoffee()); // Promise { 'Kopi berhasil dibuat' } hasil masih dalam bentuk promise
/*
- Executor function akan berjalan secara asynchronous hingga akhirnya kondisi Promise berubah dari pending menjadi fulfilled/rejected.
- Executor function mengeksekusi resolve() dengan membawa data string “Kopi berhasil dibuat”. Jika kita ubah nilai dari variabel isCoffeeMakerReady menjadi false, maka executor function akan mengeksekusi reject() dengan membawa pesan penolakan “Mesin kopi tidak bisa digunakan”
*/


// consuming promise
const stock = {
    coffeeBeans: 2,
    water: 100,
}
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}
// checkStock().then(handleSuccess, handleFailure);
// /*
// - checkStock() merupakan fungsi yang mengembalikan promise dan akan menghasilkan resolve() dengan membawa nilai “Stok cukup. Bisa membuat kopi”.
// Lalu kita mendeklarasikan fungsi handleSuccess() dan handleFailure() yang mencetak nilai dari parameternya.
// - Kemudian kita memanggil method .then() dari checkStock. Isi parameter then() dengan dua fungsi handler yang telah kita buat sebelumnya.
// - Parameter pertama berisi fungsi handleSuccess untuk menangani kondisi ketika promise berstatus resolve. Parameter kedua berisi fungsi handleFailure yang menangani ketika promise berstatus reject.
// */

// onRejected with Catch Method
checkStock()
	.then(handleSuccess)
	.catch(handleFailure);