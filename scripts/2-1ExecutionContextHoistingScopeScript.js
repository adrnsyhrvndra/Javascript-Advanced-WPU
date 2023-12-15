
// 2.1 Execution Context, Hoisting & Scope


// Global Execution Context

var nama = "Adriansyah";
console.log(nama);

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase pada global context


// Functional Execution Context

console.log()

var nama_siswa = "Adriansyah Ravindra";
var umur =  21;

function sayHello(){
      return `Halo nama saya ${nama}, saya ${umur} tahun.`;
}

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama_lengkap = "Adriansyah Ravindra";
var username_ig = "@adriansyah";

function cetakURL(username_ig){
      var instagramURL = 'https://www.instagram.com/';
      return instagramURL + username_ig;
}

console.log(cetakURL(username_ig));