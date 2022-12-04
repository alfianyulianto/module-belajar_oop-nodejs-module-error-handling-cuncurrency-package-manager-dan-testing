class Mail {
	constructor(){
		// membuat sebuah property
		// this meruapan representasi bahwasanya attribut yang dituju bersifat global dan menempel pada object tersebut
		this.from = 'pengirim@dicoding.com';
		this.contacts = [];
		this.yourOtherContact = "this values";
	}
	sendMessage(msg, to, from){
		console.log(`you send: ${msg} to ${to} from ${from}`); 
		// from disini bukan merujuk pada propery global melainkan meujuk pada parameter dari methods sendMessage
		this.contacts.push(to);
	}

}
const alfian = new Mail();
alfian.sendMessage('Hai, how are you?', 'budi.doremi@gmail.com', 'alfianyulianto36@gmail.com');
console.log(alfian.contacts);
