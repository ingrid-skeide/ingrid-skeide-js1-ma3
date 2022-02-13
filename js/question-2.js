// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=7b94ce0579594d968c7c30039c088fb4";

const box = document.querySelector(".games");

async function getApi() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        box.innerHTML = "";

        for(let i = 0; i < games.length; i++) {

            if (i === 8) {
                break;
            }

            box.innerHTML += 
                `<div class="result">
                    <p>${games[i].name}</p>
                    <p>Rating: ${games[i].rating}</p>
                    <p>Tags: ${games[i].tags.length}</p>
                </div>`;
        }
    }
    catch (error) {
        box.innerHTML += displayError();
    }
}

getApi();