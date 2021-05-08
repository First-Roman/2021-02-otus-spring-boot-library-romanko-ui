import {reqDel, reqGet, reqPostForm, reqPutForm} from "../util/transport";

const path = "/api/book/";
const header = {'Content-Type': 'application/json'};

export async function getAllBook() {
    let books = await reqGet(path + "all", header);
    return books;
}

export async function getBookById(id) {
    let book = await reqGet(path + id, header);
    return book;
}

export async function editBook(formData) {
    let response = reqPutForm(path + "edit", formData);
    return response;
}

export async function addBook(formData) {
    let response = reqPostForm(path + "add", formData);
    return response;
}

export async function deleteBook(id) {
    let uri = path + "del/" + id;
    let response = reqDel(uri, header);
    return response;
}