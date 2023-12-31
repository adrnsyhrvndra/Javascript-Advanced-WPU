
// Menerima fungsi sebagai Argumen

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(x) {
  return x * x;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// Mengembalikan Fungsi

function multiplier(factor) {
      return function(x) {
        return x * factor;
      };
    }
    
const multiplyByTwo = multiplier(2);
console.log(multiplyByTwo(5)); // Output: 10
    