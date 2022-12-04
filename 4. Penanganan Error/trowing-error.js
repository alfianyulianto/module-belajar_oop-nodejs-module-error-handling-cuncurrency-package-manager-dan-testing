// let student = {"name":"Alfian", "age": 20};

// try{
// 	let user = JSON.parse(student); // JSON.parse merubah string menjadi object json
// 	console.log(user.name); // error tidak akan dieksekusi langsung masuk ke block catch
// 	console.log(user.age);  // error
// }catch(err){
// 	console.log(err.name); //
// 	console.log(err.message);
// }
/* output
error
*/

// -------------------------------
// Kode di atas tidak menimbulkan eror, sehingga blok catch akan diabaikan. Namun, tidak adanya properti name pada json sebenarnya sama saja dengan eror karena akan berdampak pada jalannya program kita.
// let json = '{ "age": 20 }';
// try {
//     let user = JSON.parse(json);
//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }
/* output
undefined
20
*/

// Throwing Error
// let json = '{ "age": 20 }';
// try {
//     let user = JSON.parse(json);
//     if (!user.name) {
//         throw new SyntaxError("'name' is required."); // melemparkan error program ke block catch
//     }
//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }
/* output
JSON Error: errorCode is not defined
*/

// instanceOf pada Error
// instanceOf untuk mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
let json = '{ "name": "Yoda", "age": 20 }';
try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
    errorCode;
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
	// tanpa instanceOf
	/* output tanpa intanceOf
		JSON Error: errorCode is not defined
	*/
    // console.log(`JSON Error: ${error.message}`);

    // dengan instanceOf
    /* output dengan intanceOf
		error bro
	*/
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) { // ReferenceError diambil dari error.name pada object error
        console.log("error bro");
    } else {
        console.log(error.stack);
    }
}

// Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”, 
// lantas bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul? 
// Jawabannya adalah dengan if statement.