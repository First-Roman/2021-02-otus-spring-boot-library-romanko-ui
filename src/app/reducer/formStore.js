import {deepClone} from "../util/clone";
import {
    originalEmpty,
    setAuthorToEdit,
    setBookToEdit,
    setGenreToEdit,
    templateAuthor,
    templateBook,
    templateGenre
} from "../util/template";
import c from "../constant/formStoreConstant";

const init = {...initState()};

export const formStore = (state = init, action) => {
    let newState = deepClone(state);
    switch (action.type) {
        case c.SET_DATA_TO_SELECT:
            newState.data = deepClone(setSelectData(newState.data, action.data, action.name));
            break;
        case c.SET_BOOK_TO_EDIT:
            newState.data = deepClone(setBookToEdit(action.book));
            newState.visible = true;
            newState.original = deepClone(action.book);
            newState.type = c.BOOK_EDIT;
            break;
        case c.CREATE_NEW_BOOK:
            newState.visible = true;
            newState.data = deepClone(templateBook());
            newState.original = deepClone(originalEmpty());
            newState.type = c.CREATE_NEW_BOOK;
            break;
        case c.SET_AUTHOR_TO_EDIT:
            newState.data = deepClone(setAuthorToEdit(action.author));
            newState.visible = true;
            newState.original = deepClone(action.author);
            newState.type = c.AUTHOR_EDIT;
            break;
        case c.CREATE_NEW_AUTHOR:
            newState.visible = true;
            newState.data = deepClone(templateAuthor());
            newState.original = deepClone(originalEmpty());
            newState.type = c.CREATE_NEW_AUTHOR;
            break;
        case c.SET_GENRE_TO_EDIT:
            newState.data = deepClone(setGenreToEdit(action.genre));
            newState.visible = true;
            newState.original = deepClone(action.genre);
            newState.type = c.GENRE_EDIT;
            break;
        case c.CREATE_NEW_GENRE:
            newState.data = deepClone(templateGenre());
            newState.visible = true;
            newState.original = deepClone(originalEmpty());
            newState.type = c.CREATE_NEW_GENRE;
            break;
        case c.SET_VALUE:
            newState.data = deepClone(setValue(newState.data, action.name, action.value));
            break;
        case c.CLOSE_FORM:
            newState = deepClone(initState());
            break;
    }
    return newState;
};


function initState() {
    return ({
        type: undefined,
        visible: false,
        original: null,
        className: "classic-form-library",
        clsBtnTitle: "Закрыть",
        sndBtnTitle: "Сохранить",
        formTitle: "Форма",
        data: []
    })
}

function setValue(arr, name, value) {
    let newArr = arr.map(i => {
        if (i.name === name) {
            i.defaultValue = value;
            return deepClone(i);
        }
        return i;
    });
    return newArr;
}

function setSelectData(arr, data, name) {
    let newArr = arr.map(i => {
        if (i.name === name) {
            let newItem = deepClone(i);
            newItem.option = data.map(d => d.text);
            newItem.original = data;
            newItem.change = true;
            return newItem;
        }
        return i;
    });
    return newArr;
}

