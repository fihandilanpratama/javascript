const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
	document.body.classList.toggle('ubah-warna-bg');
});

const tAcakWarna = document.createElement('button');
const tAcakWarnaText = document.createTextNode('acak warna');
tAcakWarna.appendChild(tAcakWarnaText);
tAcakWarna.setAttribute('type', 'button');
btn.after(tAcakWarna); // tempatkan setelah tombol ubah warna

tAcakWarna.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// slider
const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderBiru = document.querySelector('input[name=sliderBiru]');

let sliders = [sliderMerah, sliderHijau, sliderBiru];
let boxSliders = document.querySelectorAll('div.box');

sliders.forEach(function(item) {
	item.addEventListener('input', function() {
		const r = sliderMerah.value; // sliderMerah.value untuk get value dari tag input
		const g = sliderHijau.value;
		const b = sliderBiru.value;
		document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
		boxSliders[0].innerHTML = r; // masukkan ke box
		boxSliders[1].innerHTML = g; 
		boxSliders[2].innerHTML = b;
	});
});

// sliderMerah.addEventListener('input', function() {
// 	const r = sliderMerah.value; // sliderMerah.value untuk get value dari tag input
// 	const g = sliderHijau.value;
// 	const b = sliderBiru.value;
// 	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// 	boxMerah.innerHTML = r;
// });

// sliderHijau.addEventListener('input', function() {
// 	const r = sliderMerah.value;
// 	const g = sliderHijau.value;
// 	const b = sliderBiru.value;
// 	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// 	boxHijau.innerHTML = g;
// });

// sliderBiru.addEventListener('input', function() {
// 	const r = sliderMerah.value;
// 	const g = sliderHijau.value;
// 	const b = sliderBiru.value;
// 	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// 	boxBiru.innerHTML = b;
// });