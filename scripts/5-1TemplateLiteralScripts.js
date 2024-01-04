
// Template Literal / Template String
let email = `adrimedia.indonesia@gmail.com`;
let umur = 17;
console.log(`email saya adalah ${email} dan umur saya adalah ${umur}`);

// Template Literal / Template String dengan implementasi suatu exppression
console.log(`${1 + 1}`);
// console.log(`${alert('Halo')}`);

// Template Literal / Template String dengan implementasi kasus untuk menentukan genap dan ganjil
let a = 10;
console.log(`${ a % 2 === 0 ? 'Genap' : 'Ganjil' }`);

// HTML Fragments

let mahasiswa = {
      nama : 'Adriansyah',
      jurusan : 'Sistem Informasi'
};

const el = `<h1 class="mhs">${mahasiswa.nama}</h1>`;

document.getElementById('mhs').innerHTML = el;
