
function mahasiswa(nama,energi){
    this.nama = nama;
    this.energi = energi;
}

mahasiswa.prototype.makan = function(porsi){
    this.energi = this.energi + porsi;
    return `Halo ${this.nama}, selamat makan`;
}

mahasiswa.prototype.main = function(jam){
    this.energi = this.energi - jam;
    return `Halo ${this.nama}, selamat bermain`;
}

mahasiswa.prototype.tidur = function(jam_tidur){
    this.energi = this.energi + jam_tidur * 2;
    return `Halo ${this.nama}, selamat tidur yang nyenyak`;
}

let adriansyah = new mahasiswa('adriansyah',10);

