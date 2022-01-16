// spread operator

// menggabungkan dua atau lebih array
// const goToubun = ['ichika', 'nino', 'miku', 'yotsuba', 'itsuki'];
// const horimiya = ['hori', 'yuki'];
// const characters = goToubun.concat(horimiya);
// const characters = [...goToubun, 'fuutarou', ...horimiya];
// console.log(characters);


// meng-copy array  / ubah nodelist ke array
// const list = document.querySelectorAll('ul li');
// const goToubun = [...list];  // -> array
// const goToubun = [...list].map(item => item.textContent);
// console.log(goToubun);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;