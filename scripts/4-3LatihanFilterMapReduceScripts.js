
function mengetahuiJamVideo(a,b) {

      // Ambil semua elemen video
      let ambildatasemuaelemenvideo = Array.from(document.querySelectorAll('[data-duration]'));

      // Ambil yang javascript lanjutannya aja
      // Menggunakan filter()
      let filterVideonya = ambildatasemuaelemenvideo. filter((a) => {
            return a.innerHTML === 'JAVASCRIPT LANJUTAN';
      });

      // ambil durasi masing-masing video
      let ambilDurasi = filterVideonya.map((b) => {
            return b.dataset.duration;
      });

      // ubah durasi menjadi int, ubah menjadi detik
      let ubahDurasi = ambilDurasi.map((c) => {
            // 10:30 => [10,30] hillangin dulu titiknya
            let parts = c.split(':');

            // ubah string menjadi angka
            let convertNumbers = parts.map((d) => {
                  return parseFloat(d);
            });

            // ubah menit menjadi detik
            return convertNumbers[0] * 60 + convertNumbers[1];
      });

      // Jumlahkan semua detik
      let penjumlahanSemua = ubahDurasi.reduce((accumulator,currentValue) => {
            return accumulator + currentValue;
      });

      // Ubah jadi detik ke jam menit
      let jam = Math.floor(penjumlahanSemua / 3600);
      penjumlahanSemua = penjumlahanSemua - jam * 3600;
      let menit = Math.floor(penjumlahanSemua / 60);
      let detik = penjumlahanSemua - menit * 60;

      // Simpan DOM
      let pDurasi = document.querySelector('.total-durasi');

      pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
      
      return pDurasi;
      
};

mengetahuiJamVideo();


function mengetahuiJumlahVideo(){

      // Ambil semua elemen video
      let ambildatasemuaelemenvideo = Array.from(document.querySelectorAll('[data-duration]'));

      // Ambil yang javascript lanjutannya aja
      // Menggunakan filter()
      let filterVideonya = ambildatasemuaelemenvideo. filter((a) => {
            return a.innerHTML === 'JAVASCRIPT LANJUTAN';
      });

      let pjmlvideo = document.querySelector('.jumlah-video');

      pjmlvideo.textContent = `${filterVideonya.length}`;

}

mengetahuiJumlahVideo();