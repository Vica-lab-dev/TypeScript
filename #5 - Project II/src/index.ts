import {buildApiUrl} from "./services/mealDbService";

const testUrl = buildApiUrl({
    endpoint: "search.php", data: [
        {param: "s", value: "test"}
    ]
});

console.log(testUrl);