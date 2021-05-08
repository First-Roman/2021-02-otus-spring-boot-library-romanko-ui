const init = {...initState()};
import c from "../constant/bookStoreConstant";
import {deepClone} from "../util/clone";

export const bookStore = (state = init, action) => {
    let newState = deepClone(state);
    switch (action.type) {
        case c.SET_BOOKS:
            newState.books = deepClone(action.books);
            break;
        case c.RELOAD_BOOK:
            newState.reloadBook +=1;
            break;
    }
    return newState;
};

function initState() {
    return ({
        title: "Книги",
        books: [],
        reloadBook: 0,
        buttonAddTitle: "Добавить",
        buttonChangeTitle: "Редактировать",
        buttonRemoveTitle: "Удалить",
        classNameBookWrapper: "classic-book-wrapper",
        className: "classic-browser-book"
    });
}