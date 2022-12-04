// function constructor dengan prototype
// function Mail(){
// 	this.from = 'alfianyulianto36@gmail.com';
// }
// Mail.prototype.sendMessage = function(msg, to) {
// 	console.log(`you send: ${msg} to ${to} from ${this.from}`);
// };
// let sendBudi = new Mail();
// sendBudi.sendMessage('Hello, how are you?', 'budi.doremi@gmail.com');


// function constructor tanpa prototype
function Mail(){
  this.from = "pengirim@dicoding.com",
  this.sendMessage = (msg, to) => {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  } 
};

let david = new Mail();
david.sendMessage('Hai.', 'alfianyulianto36@gmail.com');



