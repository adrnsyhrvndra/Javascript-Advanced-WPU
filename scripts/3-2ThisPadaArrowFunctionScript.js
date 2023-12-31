
// Konsep This pada arrow function

// Menggunakan Constructor function
function Mahasiswa(nama, energi) {
    this.nama = 'nama';
    this.energi = 'energi';
    
    this.sayHeloo = function() {
        console.log(`Halo, nama saya ${this.nama}, energi saya ${this.energi}`);
    }
};

const adriansyah = new Mahasiswa('Adriansyah', 10);


// Menggunakan Arrow function

function Mahasiswa2(nama2, energi2) {
    this.nama2 = 'nama2';
    this.energi2 = 'energi2';
    
    this.sayHeloo2 = () => {
        console.log(`Halo, nama saya ${this.nama2}, energi saya ${this.energi2}`);
    }
};

const adriansyah2 = new Mahasiswa2('Adriansyah', 10);

// Object literal | Hasil undefined kalau pake arrow function
// namun menggunakan constrctor function ${this.nama} nya berhasil ketangkep

const mhs1 = {
    nama: 'Adriansyah',
    energi: 10,
    sayHeloo: () => {
        console.log(`Halo, nama saya ${this.nama}, energi saya ${this.energi}`);
    }
};


// Kalau ini hasilnya akan NAN jika tidak menggunakan arrow function

const umuradri = function Mahasiswa3() {
      this.nama3 = 'nama3';
      this.umur3 = 21;

      this.sayHeloo3 = function() {
            console.log(`Halo, nama saya ${this.nama3}, energi saya ${this.energi3}`);
      }

      setInterval(function(){
            console.log(this.umur3++);
      },500)
};

const adriansyahganteng = new umuradri();

// Solusinya adalah menggunakan arrow function

const umuradri2 = function Mahasiswa4() {
      this.nama4 = 'nama4';
      this.umur4 = 21;

      this.sayHeloo4 = () => {
            console.log(`Halo, nama saya ${this.nama4}, energi saya ${this.energi4}`);
      }

      setInterval(() => {
            console.log(this.umur4++);
      },500);
}

const adriansyahganteng2 = new umuradri2();

// Kasus real constructor function vs arrow function

const box = document.querySelectorAll('.box');

box.addEventListener('click', function() {
      console.log(this);
      this.classList.add('size-animation');
});