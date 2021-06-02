import {reqDel, reqGet, reqPostForm, reqPutForm} from "../util/transport";

const path = "/api/genre/";
const header = {'Content-Type': 'application/json'};

export async function getAllGenre() {
    let genres = await reqGet(path + "all", header);
    return genres;
}

export async function getGenreById(id) {
    let genre = await reqGet(path + id, header);
    return genre;
}

export async function editGenre(formData) {
    let uri = path + "edit";
    let resp = await reqPutForm(uri, formData);
    return resp;
}

export async function addGenre(formData) {
    let uri = path + "add";
    let resp = await reqPostForm(uri, formData);
    return resp;
}

export async function removeGenreById(id) {
    let uri = path + "del/" + id;
    let resp = await reqDel(uri, header);
    return resp;
}