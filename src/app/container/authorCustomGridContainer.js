import {connect} from "react-redux";
import CustomGrid from "../component/customGrid";
import {getAllAuthor, getAuthorById, removeAuthorById} from "../api/authorApi";
import {actionSetAuthors} from "../action/authorStoreAction";
import {actionCreateNewAuthor, actionSetAuthorToEdit} from "../action/formStoreAction";

export const AuthorCustomGridContainer = connect(state => {
        return state.authorStore;
    },
    dispatch => ({
        onloadData() {
            getAllAuthor().then(authors => {
                dispatch(actionSetAuthors(authors))
            }).catch(e => {
                dispatch(actionSetAuthors(testArrAuth))
            });
        }, editHandler(id) {
            getAuthorById(id).then(author => {
                dispatch(actionSetAuthorToEdit(author))
            });
        },
        removeHandler(id) {
            removeAuthorById(id).then(resp => {
                return getAllAuthor()
            }).then(authors => {
                dispatch(actionSetAuthors(authors))
            });
        },
        addHandler() {
            dispatch(actionCreateNewAuthor());
        }
    }))(CustomGrid);

//**TEST DATA**//
let testArrAuth = [{
    firstName: "Александр",
    lastName: "Пушкин",
    middleName: "Сергеевич",
    id: 1
},
    {
        firstName: "Лев",
        lastName: "Толстой",
        middleName: "Николаевич",
        id: 2
    }];