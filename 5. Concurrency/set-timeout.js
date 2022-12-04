console.log('Awal program')
setTimeout(()=>{
	console.log('Pertengahan program');
}, 3000);
console.log('Akhir program');
/*
- Jika hanya mengenal program secara synchronous, maka kita dapat membayangkan hasilnya memiliki urutan sebagai berikut:
	^ Mencetak -> Awal program
	^ Menunggu selama tiga detik.
	^ Mencetak -> Pertenganah program
	^ Mencetak -> Akhir progam

- Namun, nyatanya setTimeout() tidak akan menghentikan JavaScript untuk melakukan eksekusi kode pada baris berikutnya. Sehingga urutannya menjadi seperti berikut:
	^ Mencetak -> Awal program
	^ Mencetak -> Akhir progam
	^ Menunggu selama tiga detik
	^ Mencetak -> Pertenganah program
*/