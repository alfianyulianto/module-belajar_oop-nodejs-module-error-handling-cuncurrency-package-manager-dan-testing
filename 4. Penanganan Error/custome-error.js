class ValidationError extends Error { // class ValidationError merupakan child dari class Error bawaan JS
    constructor(message) {
        super(message); // memanggil construct dari class error JS
        this.name = "ValidationError"; // membuat property name
    }
}
let obj1 = new ValidationError();
console.log(obj1);
/*
ValidationError
    at Object.<anonymous> (D:\Document\upgrades\20 JavaScript from Dicoding\4. P
enanganan Error\custome-error.js:7:12)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_ma
in:77:12)
    at node:internal/main/run_main_module:17:47
*/
 
let json = '{ "age": 30 }';
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
 
/* output
Invalid data: 'name' is required.
*/