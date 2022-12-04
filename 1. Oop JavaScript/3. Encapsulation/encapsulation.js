class Mail {
	#contacts;
 	constructor(author){
		this.#contacts = [];
		this.from = author;
	}

	sendMessage(msg, to){
		console.log(`you send: ${msg} to ${to} from ${this.from}`);
		 this.#contacts.push(to);
	}

	showAllContacts(){
		return this.#contacts;
	}
}

let alfian = new Mail('pengirim@dicoding.com');
alfian.sendMessage('Hai.', 'alfianyulianto36@gmail.com');
// console.log(alfian.contacts); // error karena jika access modifier berupa private maka hanya bisa diakses di dalam block class saja
console.log(alfian.showAllContacts());
