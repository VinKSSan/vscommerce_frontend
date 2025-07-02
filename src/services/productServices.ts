import axios from "axios";

const host = "http://localhost:8080";

export function findAll(size :number){
    return axios.get(host+`/products?size=${size}`)
}

export function findById(id :number){
    return axios.get(host+`/products/${id}`);
}
