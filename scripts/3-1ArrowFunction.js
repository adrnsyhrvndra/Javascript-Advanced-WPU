
// Function Expression
const tampilNama = function (nama){
    return `Halo, ${nama}`;
}
console.log(tampilNama('Adriansyah'));

// Dengan menggunakan arrow function
const tampilArrow = (nama) => {
      return `Halo, ${nama}`;
};
console.log(tampilArrow('Adriansyah'));

// Dengan menggunakan arrow function dengan 2 parameter
const tampilArrow2 = (nama, umur) => {
      return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
};
console.log(tampilArrow2('Adriansyah', 20));


// Membuat function dengan map
const Namamahasiswa = ['Adriansyah', 'Adrian', 'Ravindra'];

const jumlahnamamahasiswa = Namamahasiswa.map(function (mahasiswa){
      return mahasiswa.length;
});

console.log(jumlahnamamahasiswa);


// Membuat function dengan map dengan arrow function
const jumlahnamamahasiswa2 = Namamahasiswa.map((mahasiswa) => {
      return mahasiswa.length;
});
console.log(jumlahnamamahasiswa2);

// contoh fungsi arrow function untuk perkalian
const perkalian = (a, b) => {
      return a * b;
};
console.log(perkalian(10,10));


// Membuat function dengan map dengan arrow function dan berisi objek
let mahasiswa3 = ['Adriansyah', 'Adrian', 'Ravindra'];
let jumlahmahasiswa3 = mahasiswa3.map((mahasiswa) => ({
      nama: mahasiswa,
      jumlahHuruf: mahasiswa.length
}));

console.table(jumlahmahasiswa3);