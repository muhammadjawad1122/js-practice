const accountID=123
let accountEmail="jawad@google.com"
var accountPassword="234"
accountCity="peshawar"
let accountState;

// accountID=3  cpnst not change

console.log(accountID);

accountEmail="khan@google.com"
accountPassword="456"
accountCity="islamabad"

/*prefer not to use var
because of the issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity,accountState])











// 1. Scope (biggest reason)
// var → function-scoped
// let → block-scoped
// if (true) {
//   var a = 10;
//   let b = 20;
// }

// console.log(a); // ✅ works
// console.log(b); // ❌ error

// 👉 let is safer because it stays inside { } (block)