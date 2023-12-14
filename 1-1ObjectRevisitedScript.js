
// 4 Cara untuk membuat object pada Javascript

// 1. Object Literal

let mahasiswa = {
    nama : "Adriansyah",
    energy : 90,
    makan : function(porsi){
        this.energy = this.energy + porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    },
    tidur : function(pagi){
        this.energy = this.energy + pagi;
        console.log(`Halo ${this.nama}, selamat tidur`);
    }
};

let mahasiswa02 = {
    nama:"Doddy",
};


// 2. Function Declaration

function mahasiswaFunctionDeclaration(nama,energi){
    let siswa = {};
    siswa.nama = nama;
    siswa.energi = energi;
    siswa.makan = function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }
    siswa.berantem = function(lelah){
        this.energi = this.energi - lelah;
        console.log(`Halo ${this.nama}, jangan main terus bro!!!`);
    }
    return siswa;
}

let adransyah = mahasiswaFunctionDeclaration('Adriansyah', 20);
let sadransyah = mahasiswaFunctionDeclaration('Sandra', 10);


// 3. Constructur Function
// keyword new and this

function mahasiswaConstructur(nama,energi){
    this.nama = nama;
    this.energi = energi;
    this.makan = function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }
    this.berantem = function(lelah){
        this.energi = this.energi - lelah;
        console.log(`Halo ${this.nama}, jangan main terus bro!!!`);
    }
}

let sam = new mahasiswaConstructur('Adriansyah', 20);
let ham = new mahasiswaConstructur('Sandra', 10);