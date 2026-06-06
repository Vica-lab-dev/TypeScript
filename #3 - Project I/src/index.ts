import {callOMDBApi} from "./services/omdbApiServices";
import {generateYears} from "./helpers/yearGeneratorHelper";

const selectMovieYear = document.querySelector("#movieYears")  as HTMLSelectElement;

generateYears(1960, selectMovieYear, 2025);

const searchMovieElement = document.querySelector("#searchMovie") as HTMLButtonElement;

searchMovieElement.addEventListener("click", async (e) => {
    e.preventDefault();

    const movieNameElement = document.querySelector("#movieName") as HTMLInputElement;
    if(movieNameElement.value.trim() === ""){
        alert("You need to enter the movie name!");
        return;
    }

    const response = await callOMDBApi([
        {key: "s", value: movieNameElement.value},
        {key: "y", value: selectMovieYear.value}
    ]);

    console.log(response);
});