// DOM Selection
const judul = document.getElementById('judul');
judul.innerHTML = "DOM Sellection";
judul.style.textAlign = "center";

document.getElementsByTagName('p')[0].style.backgroundColor = 'lightblue';
document.getElementsByClassName('p2')[0].style.backgroundColor = 'lightgreen';

const a = document.querySelector('#container #a a');
a.style.textDecoration = 'none';
document.querySelector('section#b p').style.backgroundColor = 'pink';
document.querySelector('section#b ul li:nth-child(2)').style.backgroundColor = 'lightyellow';

const p = document.querySelectorAll('p');
for( let i = 0; i < p.length; i++ ) {
	p[i].style.textTransform = 'capitalize';
}

// mempersempit root node dari document ke sectionA
const sectionA = document.getElementById('a');  
sectionA.querySelector('p:last-child').style.backgroundColor = '#7FFFD4';

// DOM Manipulation
const tahun = 2020;
sectionA.querySelector('p:first-child').innerHTML = `
Di bawah adalah link menuju akun Github saya dan dibuat pada tahun ${tahun}`;

judul.setAttribute('name', 'fihan'); // parrm 1: nama attribute, parrm 2: valuenya
a.setAttribute('id', 'link');
console.log("Isi attribute href dari element a adalah " + a.getAttribute('href'));
judul.removeAttribute('name');

const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.remove('label');
// element.classList.toggle()
// element.classList.item()
// element.classList.contains()
// element.classList.replace()

const btnSwitcher = document.querySelector('button#switcher');

btnSwitcher.addEventListener('click', function() {
	document.body.classList.toggle('night-mode');
	if( document.body.classList.contains('night-mode') == true ) {
		btnSwitcher.innerHTML = 'malam';
	} else {
		btnSwitcher.innerHTML = 'normal';
	}
});


// Node Manipulation
const newP = document.createElement('p'); // buat elementnya
const newPtext = document.createTextNode('Paragraf baru'); // buat isinya
newP.appendChild(newPtext); // masukkan isi ke elementnya
sectionA.appendChild(newP); // masukkan element ke bagian akhir dari parentnya

const newli = document.createElement('li'); // buat elementnya
newli.appendChild(document.createTextNode('item baru')); // masukkan text ke element tersebut
const ul = document.querySelector('section#b ul'); // ambil parent dari newli
const li2 = ul.querySelector('li:nth-child(2)'); // ambil element setelahnya
ul.insertBefore(newli, li2); // masukkan new li sebelum li2


// hapus element child terakhir dari parentnya
sectionA.removeChild(sectionA.lastElementChild);

// DOM events
const container = document.getElementById('container');
// function ubahWarnaContainer() {					
// 	container.style.backgroundColor = 'aqua';
// }

const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function() {
	const itemBaru = document.createElement('li');
	itemBaru.appendChild(document.createTextNode('item baru'));
	ul.appendChild(itemBaru);
});