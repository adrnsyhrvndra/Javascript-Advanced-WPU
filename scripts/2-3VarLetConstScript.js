
// Berhasil
console.log(i);
var i = 10;


// Hositing dengan VAR
let a;
console.log(a);
a = 10;

function testcoba(){
      for(var p = 0; p < 10; p++){
            console.log(p);
      }
}

testcoba();
console.log(testcoba());


// Implementasi Function Scope

(function(){
      for(let j = 0; j < 10; j++){
            console.log(j);
      }
}());

// coba kita akses diluar scope functionya, apakah akan error
console.log("Kita coba ya :")
console.log(j); // ya akan error

// Solusinya adalah dengan menggunakan let biar nga ribet karena dia memakai konsep block scope

let o = 10;

for(let o = 0; o < 10; o++){
      console.log(o);
}

console.log(o);

// Sekarang bedanya dengan const adalah, kalau const si nilainya nga bisa dirubah lagi.

const r = 90;
r = 30; // hasil akan error kalau pake const

const z = 30;
z = 80;
console.log(z);
