
// Kasus real constructor function vs arrow function

const box = document.querySelector(".box");

box.addEventListener('click', function() {

      let satu = 'size-animation';
      let dua = 'caption-animation';

      if(this.classList.contains(satu)) {
            this.classList.remove(satu);
            this.classList.add(dua);
      } else {
            this.classList.remove(dua);
            this.classList.add(satu);
      }
      setTimeout(() => {
            this.classList.toggle('caption-animation');
      }, 600);
});