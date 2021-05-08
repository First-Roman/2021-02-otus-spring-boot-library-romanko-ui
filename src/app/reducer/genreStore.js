import {deepClone} from "../util/clone";
import c from "../constant/genreStoreConstant";

const init = {...initState()};

export const genreStore = (state = init, action) => {
    let newState = deepClone(state);
    switch (action.type) {
        case c.SET_GENRES:
            newState.data = deepClone(convertGenresData(action.genres));
            break;
        case c.RELOAD_GENRE:
            newState.reload += 1;
            break;
    }
    return newState;
};

function initState() {
    return ({
        reload: 0,
        title: "Жанры",
        buttonAddTitle: "Добавить",
        removeButtonTitle: "Удалить",
        editButtonTitle: "Редактировать",
        data: [],
        className: "classic-genre-library"
    });
}

function convertGenresData([...genres]) {
    let genresData = genres.map(genre => {
        let item = deepClone(genre);
        item.text = genre.genre;
        return item;
    });
    return genresData;
}