// const numbers = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter angka >= 3
// menggunakan for loop
// let newNumbers = [];
// for( let i = 0; i < numbers.length; i++ ) {
//     if( numbers[i] >= 3 ) newNumbers.push(numbers[i]);
// }

// filter -> return new array
// menggunakan filter()
// let newNumbers = numbers.filter(number => number >= 3);

// map -> return new array
// tambahkan semua angaka dengan dua
// let newNumbers = numbers.map(number => number + 1);

// reduce -> return new array
// [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// let newNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);   // 0 : nilai awal accumulator
// console.log(numbers);
// console.log(newNumbers);

const numbers = [1, 2, 3, 4, 5, 6, 7];
// filter angka genap
// setiap element ditambahkan 1
// dijumlahkan semua element
const result = numbers.filter(number => number % 2 === 0) // [2, 4, 6]
    .map(number => number / 2)  // [1, 2, 3]
    .reduce((acc, cur) => acc + cur, 0);  // 6

console.log(result);