/*We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.*/

let admin;
let firstName;

firstName = "John";
admin = firstName;

alert(admin);

const ourPlanet = "Earth"; //better: ourPlanetName
const currentUser = "John"; //better: currentUserName

console.log(23 + 97);
console.log(1+2+3+4+5+6);
console.log((4+6+9)/77);

let a = 10;
console.log(a);
console.log(a * 9);

let b = 7 * a;
console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);