import {deepClone} from "./clone";

export function setBookToEdit({...book}) {
    let template = deepClone(templateBook());
    let newTemplate = template.map(item => {
        let newItem = deepClone(item);
        switch (item.name) {
            case "title":
                newItem.defaultValue = book.title;
                break;
            case "author":
                newItem.defaultValue = book.author;
                break;
            case "genre":
                newItem.defaultValue = book.genre;
                break;
        }
        return newItem;
    });
    return newTemplate;
}

export const originalEmpty = () => ({
    id: 0,
    genreId: 0,
    authorId: 0
});

export function templateBook() {
    return ([
        {
            type: "input",
            option: [],
            placeholder: "Название книги",
            defaultValue: "",
            change: false,
            name: "title"
        },
        {
            type: "select",
            option: [],
            placeholder: "Автор",
            defaultValue: "",
            change: false,
            addParam: "authorId",
            name: "author"
        },
        {
            type: "select",
            option: [],
            placeholder: "Жанр",
            defaultValue: "",
            change: false,
            addParam: "genreId",
            name: "genre"
        }
    ]);
}

export function setGenreToEdit({...genre}) {
    let template = deepClone(templateGenre());
    let newTemplate = template.map(item => {
        let newItem = deepClone(item);
        if (item.name === "genre") {
            newItem.defaultValue = genre.genre;
        }
        return newItem;
    });
    return newTemplate;
}

export function templateGenre() {
    return ([
        {
            type: "input",
            option: [],
            placeholder: "Жанры",
            defaultValue: "",
            change: false,
            name: "genre"
        }
    ]);
}

export function setAuthorToEdit({...author}) {
    let template = deepClone(templateAuthor());
    let newTemplate = template.map(item => {
        let newItem = deepClone(item);
        switch (item.name) {
            case "lastName":
                newItem.defaultValue = author.lastName;
                break;
            case "middleName":
                newItem.defaultValue = author.middleName;
                break;
            case "firstName":
                newItem.defaultValue = author.firstName;
                break;
        }
        return newItem;
    });
    return newTemplate;
}

export function templateAuthor() {
    return ([
        {
            type: "input",
            option: [],
            placeholder: "Фамилия",
            defaultValue: "",
            change: false,
            name: "lastName"
        },
        {
            type: "input",
            option: [],
            placeholder: "Имя",
            defaultValue: "",
            change: false,
            name: "firstName"
        },
        {
            type: "input",
            option: [],
            placeholder: "Отчество",
            defaultValue: "",
            change: false,
            name: "middleName"
        }
    ]);
}