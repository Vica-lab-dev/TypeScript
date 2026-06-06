import {callOMDBApi} from "./services/omdbApiServices";

const response = await callOMDBApi([
    {key: "t", value: "Terminator"},
    {key: "y", value: "2000"}
]);

console.log(response);