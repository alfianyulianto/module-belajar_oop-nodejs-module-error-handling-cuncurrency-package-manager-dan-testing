// const orderCoffee = () => {
// 	let coffee = null;
// 	console.log("Sedang membuat kopi, silahkan tunggu..");
// 	setTimeout(()=>{
// 		coffee = "Kopi sudah jadi!";
// 	}, 3000);
// 	return coffee;
// }

// const coffee = orderCoffee();
// console.log(coffee);
// /* output
// Sedang membuat kopi, silakan tunggu...
// null
// */
// /*
// - Jika kita melakukan hal seperti di atas untuk mencetak nilai coffee, maka hal tersebut tidak akan pernah terjadi. Seperti yang sudah kita ketahui, fungsi setTimeout() tidak akan menghentikan JavaScript untuk mengeksekusi kode yang ada selanjutnya. Jadi, fungsi orderCoffee() akan selalu mengembalikan nilai null, karena kode return coffee akan dieksekusi terlebih dahulu dibandingkan dengan coffee="Kopi sudah jadi!";. Kode asynchronous perlu disusun dengan cara yang berbeda dari synchronous. Cara paling dasar adalah dengan 'callback function'.
// */


// callback function
const orderCoffee = callback => {
	let coffee = null;
	console.log("Sedang membua kopi, silahkan tunggu..");
	setTimeout(()=>{
		coffee = "Kopi sudah jadi!";
		callback(coffee);
	}, 3000);
}
orderCoffee(coffee => {
	console.log(coffee)
});
/* output
Sedang membuat kopi, silakan tunggu...
---- setelah 3 detik ----
Kopi sudah jadi!
*/