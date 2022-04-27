//ha ez nem függvény lenne, hanem sima string, nem lehetne beletenni változó adatokat paraméterként
//paraméternek minden megadható, csak utána következetesen kell használni
//itt a return adja vissza a html-struktúrát, és a paraméterek az adatot

const movieCardComponent = function (title, sub, text) {
    return `
        <div class="card">
            <div class="movieTitle">${title}</div>
            <div class="movieYear">${sub}</div>
            <div class="movieDesc">${text}</div>
        </div>
    `
}

const movieTitleComponent = `
<h1>Movies</h1>

`


const loadEvent = function () {
    
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", movieTitleComponent) //két stringet kér: egy position és egy stringet, amit html kóddá tud alakítani

    // console.log(beers.cards);
    // console.log(beers.logo);
    // console.log(beers.cards[0].title) - az [index] helyett hoztuk létre a beer iterátort
    
    // melyik for ciklust használjuk? van-e adat: ha nincs benne adat for; ha van adat, akkor for of

    for (const movie of movies.cards) {
        console.log(movie);
        rootElement.insertAdjacentHTML("beforeend", movieCardComponent(movie.title, movie.sub, movie.text)) //nem a fenti template iterátort használjuk!
    }
}

// for of ciklust átnézni, plusz a hasonló adatstruktúrájú dolgot végignézni




window.addEventListener("load", loadEvent);

