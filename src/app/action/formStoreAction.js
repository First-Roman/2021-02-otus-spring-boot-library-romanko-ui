import c from "../constant/formStoreConstant";

export const actionSetDataToSelect = ({name, data}) => ({
    type: c.SET_DATA_TO_SELECT,
    name: name,
    data: data
});

export const actionSetBookToEdit = (book) => ({
    type: c.SET_BOOK_TO_EDIT,
    book
});

export const actionSetValue = ({name, value}) => ({
    type: c.SET_VALUE,
    name,
    value
});

export const actionCloseForm = () => ({
    type: c.CLOSE_FORM
});

export const actionCreateNewBook = () => ({
    type: c.CREATE_NEW_BOOK
});

export const actionSetGenreToEdit = (genre) => ({
    type: c.SET_GENRE_TO_EDIT,
    genre
});

export const actionSetAuthorToEdit = (author) => ({
    type: c.SET_AUTHOR_TO_EDIT,
    author
});

export const actionCreateNewAuthor = () => ({
    type: c.CREATE_NEW_AUTHOR
});

export const actionCreateNewGenre = () => ({
    type: c.CREATE_NEW_GENRE
});