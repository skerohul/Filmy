const filmy = [
    { nazev: "Pelíšky", reziser: "Jan Hřebejk", rok: 1999, cena: 249, zanr_kod: "K" },
    { nazev: "Vratné lahve", reziser: "Jan Svěrák", rok: 2007, cena: 199, zanr_kod: "K" },
    { nazev: "Želary", reziser: "Ondřej Trojan", rok: 2003, cena: 229, zanr_kod: "D" },
    { nazev: "Šarlatán", reziser: "Agnieszka Holland", rok: 2020, cena: 299, zanr_kod: "H" },
    { nazev: "Osmy", reziser: "Jiří Strach", rok: 2014, cena: 189, zanr_kod: "D" },
    { nazev: "Čertí brko", reziser: "Marek Najbrt", rok: 2018, cena: 279, zanr_kod: "K" }
];

const zanry = {
    K: "Komedie",
    D: "Drama",
    H: "Historický"
};

console.log("VŠECHNY FILMY");
console.log(filmy);

const reziseriSet = new Set(filmy.map(film => film.reziser));
console.log("SET REŽISÉRŮ");
console.log(reziseriSet);

const filmyMap = new Map();
filmy.forEach(film => filmyMap.set(film.nazev, film));
console.log("MAP FILMŮ");
console.log(filmyMap);

const filmyOd2010 = filmy.filter(film => film.rok >= 2010);
console.log("FILMY OD ROKU 2010");
console.log(filmyOd2010);

const filmySeZanrem = filmyOd2010.map(film => ({
    ...film,
    zanr: zanry[film.zanr_kod]
}));
console.log("FILMY S ŽÁNREM");
console.log(filmySeZanrem);

const ceny = filmySeZanrem.map(film => film.cena);
const prumernaCena = Math.round(ceny.reduce((suma, cena) => suma + cena, 0) / ceny.length);
const minCena = Math.min(...ceny);
const maxCena = Math.max(...ceny);

console.log("CENY");
console.log("Průměr:", prumernaCena);
console.log("Minimum:", minCena);
console.log("Maximum:", maxCena);

console.log("EXISTUJE REŽISÉR Jan Svěrák:", filmy.some(film => film.reziser === "Jan Svěrák"));
console.log("EXISTUJE FILM Pelíšky:", filmyMap.has("Pelíšky"));

console.log("DETAIL FILMU Šarlatán");
console.log(filmyMap.get("Šarlatán"));

const serazeneFilmy = [...filmy].sort((a, b) =>
    a.nazev.localeCompare(b.nazev, "cs")
);
console.log("SEŘAZENO PODLE NÁZVU");
console.log(serazeneFilmy);