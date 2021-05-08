import c from "../constant/authorStoreConstant";

export const actionSetAuthors = (authors) => ({
    type: c.SET_AUTHORS,
    authors
});

export const actionReloadAuthor = () => ({type: c.RELOAD_AUTHOR});