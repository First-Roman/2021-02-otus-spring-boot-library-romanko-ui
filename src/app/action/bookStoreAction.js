import c from "../constant/bookStoreConstant";

export const actionSetBooks = (books) => ({
    type: c.SET_BOOKS,
    books
});

export const actionDeleteBook = (id) => ({
    type: c.EDIT_BOOK,
    id
});

export const actionEditBook = (id) => ({
    type: c.EDIT_BOOK,
    id
});

export const actionReloadBooks = () => ({
    type: c.RELOAD_BOOK
});