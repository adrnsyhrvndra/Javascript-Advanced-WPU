
// 4 Cara untuk membuat object pada Javascript

// 1. Object Literal
// PROBLEM SEBELUMNYA : tidak efektif kalau kasusnya akan terdapat ratusan/puluhan object. bikin cape :(

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
// PROBLEM SEBELUMNYA : terjadinya duplikasi data walaupun datanya tidak terpakai. contoh disini yang method makan dan berantem

const methodMahasiswa = {
    makan : function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    },
    berantem : function(lelah){
        this.energi = this.energi - lelah;
        console.log(`Halo ${this.nama}, jangan main terus bro!!!`);
    },
    tidur : function(jam_tidur){
        this.energi = this.energi + jam_tidur * 2;
        console.log(`Halo ${this.nama}, selamat tidur yang nyenyak`);
    }
};

function mahasiswaFunctionDeclaration(nama,energi){

    // Masalahnya disini adalah setiap kita tambahin method di object methodMahasiswa maka harus kita tambahin seperti yang dibawah :
    // let siswa = {};
    // siswa.nama = nama;
    // siswa.energi = energi;
    // siswa.makan = methodMahasiswa.makan;
    // siswa.berantem = methodMahasiswa.berantem;
    // siswa.tidur = methodMahasiswa.tidur;

    // Solusinya adalah object.create()
    // sehingga kita tidak perlu mendefinisikan lagi si property seperti makan,main dan tidur
    let siswa = Object.create(methodMahasiswa);
    siswa.nama = nama;
    siswa.energi = energi;

    return siswa;
}

let adransyah = mahasiswaFunctionDeclaration('Adriansyah', 20);
let sadransyah = mahasiswaFunctionDeclaration('Sandra', 10);
