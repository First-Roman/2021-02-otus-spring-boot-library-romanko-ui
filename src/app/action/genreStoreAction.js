import c from "../constant/genreStoreConstant";

export const actionSetGenres = (genres) => ({
    type: c.SET_GENRES,
    genres
});

export const actionReloadGenre = () => ({
    type: c.RELOAD_GENRE
});