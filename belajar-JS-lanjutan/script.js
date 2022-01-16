const li = document.getElementsByTagName('li')[1]
const h3 = document.getElementsByTagName('h3')[0]

const searchKey = 'JAVASCRIPT LANJUTAN'
console.log(li.textContent)
console.log(`apakah string di atas terdapat kata "${searchKey}"`)
const feedBack = (li.textContent.includes(searchKey) ? 'benar' : 'salah')
console.log(`jawabannya adalah : ${feedBack}`) 

if( 1+1 !== 2 ) console.log('hello world')
else console.log('halo dunia')