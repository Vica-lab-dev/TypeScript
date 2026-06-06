import {callOMDBApi} from "./services/omdbApiServices";
import {generateYears} from "./helpers/yearGeneratorHelper";

const selectMovieYear = document.querySelector("#movieYears")  as HTMLSelectElement;

const response = await callOMDBApi([
    {key: "t", value: "Terminator"},
    {key: "y", value: "2000"}
]);

console.log(response);

generateYears(1960, selectMovieYear, 2025);