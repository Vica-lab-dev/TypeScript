import type {ApiParameterInterface} from "../interfaces/ApiParametersInterface";

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export function buildUrl(params: ApiParameterInterface[]) {
    let searchParams = "";

    params.forEach((params) => {
        searchParams += `${params.key}=${params.value}&`;
    });

    const url = API_URL+"?"+searchParams+"apikey="+API_KEY;
    console.log(url);
}