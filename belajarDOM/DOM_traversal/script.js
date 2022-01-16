// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', () => {
// 	card.style.display = 'none';
// });

const closes = document.querySelectorAll('.close');

closes.forEach(item => {
	item.addEventListener('click', (e) => {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
		e.stopPropagation();
	});
});

// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling);

const cards = document.querySelectorAll('.card');
cards.forEach( item => {
	item.addEventListener('click', (e) => {
		alert('ok');
	});
});