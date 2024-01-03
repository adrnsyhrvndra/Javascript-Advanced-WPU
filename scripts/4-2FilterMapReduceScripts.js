// Array daftar list club bola
const clubs = [
  "PSG",
  "Man United",
  "Barcelona",
  "Real Madrid",
  "Bayern Munich",
];

let newArrayClubBola = [];

for (let i = 0; i < clubs.length; i++) {
  console.log(clubs.length);

  if (clubs[i].length > 6) {
    console.log("Total String Pada Array " + clubs[i].length);
    document.querySelector(".list").innerHTML += `<li>${newArrayClubBola.push(
      clubs[i]
    )}</li>`;
  }
}

console.log(clubs.toString());

console.log(clubs.join(" - "));

console.log(
  clubs.filter(function (club) {
    return club.toString().length > 10;
  })
);

// Filter

const angka = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const newAngka = angka.filter((a) => {
  return a >= 3;
});

const bahanSayur = ["tomat", "wortel", "kangkung"];

const sayur = bahanSayur.filter((dataBahansayur) => {
  console.log(dataBahansayur.length);

  return dataBahansayur.length === 5 || dataBahansayur.length === 6;
});

console.log(sayur);

console.log(newAngka);

// Map
// kalikan semua angka dengan 2

const angka2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const newAngka2 = angka2.map((angka) => {
  return angka * 2;
});

console.log(newAngka2);

// Reduce
// jumlahkan semua elemen pada array

const angka3 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const newAngka3 = angka3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(newAngka3);

// Teknik Chaining
// cari angka > 5 (Filter)
// kalikan 3 (Map)
// jumlahkan (Reduce)

const angka4 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function hasilLatihan3FilterReducedanMap() {

  // const newAngka4Filter = angka4.filter((datangka4) => {
  //   return datangka4 > 5;
  // });
  
  // const newAngka4Map =  newAngka4Filter.map((angkaFilter) => {
  //   return angkaFilter * 3;
  // });
  
  // const newAngkaReduce = newAngka4Map.reduce((accumulator2,currentValue2) => {
  //   return accumulator2 + currentValue2;
  // });

  const newAngka4Filter = angka4.filter((datangka4) => {
    return datangka4 > 5;
  }).map((datangka4) => {
    return datangka4 * 3;
  }).reduce((accumulator2,currentValue2) => {
    return accumulator2 + currentValue2;
  });

  return newAngka4Filter;

};

console.log(hasilLatihan3FilterReducedanMap(20,20));