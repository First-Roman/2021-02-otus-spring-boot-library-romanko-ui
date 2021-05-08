import {deepClone} from "../util/clone";
import c from "../constant/authorStoreConstant";

const init = {...initState()};

export const authorStore = (state = init, action) => {
    let newState = deepClone(state);
    switch (action.type) {
        case c.SET_AUTHORS:
            newState.data = deepClone(convertAuthorsData(action.authors));
            break;
        case c.RELOAD_AUTHOR:
            newState.reload +=1;
            break;
    }
    return newState;
};

function initState() {
    return ({
        reload: 0,
        title: "Авторы",
        buttonAddTitle: "Добавить",
        removeButtonTitle: "Удалить",
        editButtonTitle: "Редактировать",
        data: [],
        className: "classic-author-library"

    });
}

function convertAuthorsData([...authors]) {
    let authorData = authors.map(author => {
        let item = deepClone(author);
        item.text = author.lastName + " " + author.firstName + " " + author.middleName;
        return item;
    });
    return authorData;
}