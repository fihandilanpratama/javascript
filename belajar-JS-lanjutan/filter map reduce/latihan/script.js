// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang hanya javascript lanjutan
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'));

// ambi durasi masing - masing video
let durasiJSLanjut = jsLanjut.map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua detik
    .reduce((total, detik) => total + detik, 0);

// ubah format jadi jam, menit, detik
const jam = Math.floor(durasiJSLanjut / 3600);
durasiJSLanjut = durasiJSLanjut - jam * 3600;  //   cari sisa detik dari jam di atas
const menit = Math.floor(durasiJSLanjut / 60);
const detik = durasiJSLanjut - menit * 60;

// simpan ke DOM
document.querySelector('.jumlah-video').textContent = jsLanjut.length;
document.querySelector('.total-durasi').textContent = `${jam} jam ${menit} menit ${detik} detik`;