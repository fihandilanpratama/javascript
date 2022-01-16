const animes = [
    { name: 'Attack on Titan', season: 'Fall 2020', rate: 9.16 },
    { name: 'Go Toubun no Hanayome', season: 'Winter 2021', rate: 8.50 },
    { name: 'Jujutsu Kaisen', season: 'Fall 2020', rate: 8.92 },
    { name: 'Tonikaku Kawaii', season: 'Fall 2020', rate: 8.42 },
    { name: 'Yakusoku no Neverland', season: 'Winter 2021', rate: 7.52 }
];

let winter2021 = animes.filter(anime => anime.season.toLowerCase() === 'winter 2021');
let fall2020 = animes.filter(anime => anime.season.toLowerCase() === 'fall 2020');

// menampilkan anime fall 2020
console.log('Anime fall 2020 : ');
fall2020.forEach((anime, index) => {
    console.log(`${index + 1}. ${anime.name}`);
});

// menampilkan anime dengan rating lebih besar dari 8.5
console.log('\nAnime dengan rating >= 8.5 : ');
animes.filter((anime, index) => {
    if( anime.rate >= 8.5 ) {
        console.log(`${index + 1}. ${anime.name} (${anime.rate.toFixed(2)})`);     
    }
});