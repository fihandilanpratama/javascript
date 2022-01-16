// selector
const title = document.querySelector('.title');
const paragraph = document.querySelector('p');

fetch("data/title.json")
    .then(respon => respon.json())
    .then(res => {
        title.textContent = res.title;
    });

// ubah title
document.querySelector('.ubah-title').addEventListener('click', (e) => {
    e.preventDefault();
    const inputTitle = document.querySelector('.input-title');
    // console.log(inputTitle.value);
    fetch("data/title.json")
    .then(respon => respon.json())
    .then(res => {
        res.title = 'okokok';
    });
});