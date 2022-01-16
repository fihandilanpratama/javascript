// core module : file system
const fs = require('fs');

// menulis string ke file secara syncronous
// try {
//     fs.writeFileSync('data/test.txt', 'hello world secara syncronous!');
// } catch(err) {
//     console.log(err);
// }


// menulis string ke file secara asyncronous
// fs.writeFile('data/test.txt', 'hello world secara asyncronous', (err) => {
//     console.log(err);
// });


// membaca isi file secara syncronous
// const coba = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(coba);


// membaca isi file secara asyncronous
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });


// core module : read line
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('masukkan nama anda : ', (nama) => {
    rl.question('masukkan umur anda : ', (umur) => {
        // ambil data dari terminal/cmd
        const contact = { nama, umur };

        // baca isi file
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        
        // parse ke json dan masukkan ke variabel
        const contacts = JSON.parse(file);
        contacts.push(contact);

        // tulis data (contacts) ke file json
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 4));

        console.log('terimakasih telah memasukkan data!');

        rl.close();
    });
});