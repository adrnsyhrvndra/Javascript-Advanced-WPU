
// 2.2 Closure

function outerFunction(){
      var nama = "Adriansyah";
      function innnerFunction(){
            console.log(nama);
      }
      innnerFunction();
}

outerFunction();


function outerFunction02(){
      // var nama = "Adriansyah Ravindra";
      function innnerFunction02(nama){
            console.log(nama);
      }
      return innnerFunction02;
}

var panggilNama = outerFunction02();
panggilNama("Adriansyah");
panggilNama("Ravindra");

function ucapkanSalam(waktu){
      return function(nama){
            console.log("Selamat "+waktu+", "+nama);
      }
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

selamatPagi('Adriansyah');
selamatSiang('Adriansyah');
selamatMalam('Adriansyah');


let counter = 10;
function hitung(){
      return function(){
            return ++counter;
      }
}

console.log(hitung()());
console.log(hitung()());
console.log(hitung()());
console.log(hitung()());
console.log(hitung()());