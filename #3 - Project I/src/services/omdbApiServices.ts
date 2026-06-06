import type {ApiParameterInterface} from "../interfaces/ApiParametersInterface";
import axios from "axios";

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

function buildUrl(params: ApiParameterInterface[]): string {
    let searchParams = "";

    params.forEach((params) => {
        searchParams += `${params.key}=${params.value}&`;
    });

    return API_URL+"?"+searchParams+"apikey="+API_KEY;
}

export async function callOMDBApi(params: ApiParameterInterface[]) {
    const url = buildUrl(params);

    return await axios.get(url);
}