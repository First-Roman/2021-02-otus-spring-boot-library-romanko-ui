import {reqGet, reqPutForm, reqDel, reqPostForm} from "../util/transport";

const path = "/api/author/";
const header = {'Content-Type': 'application/json'};

export async function getAllAuthor() {
    let authors = await reqGet(path + "all", header);
    return authors;
}

export async function getAuthorById(id) {
    let author = await reqGet(path + id, header);
    return author;
}

export async function editAuthor(formData) {
    let uri = path + "edit";
    let resp = await reqPutForm(uri, formData);
    return resp;
}

export async function addAuthor(formData) {
    let uri = path + "add";
    let resp = await reqPostForm(uri, formData);
    return resp;
}

export async function removeAuthorById(id) {
    let uri = path + "del/" + id;
    let resp = await reqDel(uri, header);
    return resp;
}