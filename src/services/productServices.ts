import axios from "axios";
import { BASE_URL } from "../utils/system";

const host = BASE_URL

export function findAll(size :number){
    return axios.get(host+`/products?size=${size}`)
}

export function findById(id :number){
    return axios.get(host+`/products/${id}`);
}
