import {connect} from "react-redux";
import BookBrowser from "../component/bookBrowser";
import {actionSetBooks} from "../action/bookStoreAction";
import {actionSetBookToEdit, actionCreateNewBook} from "../action/formStoreAction";
import {getAllBook, getBookById, deleteBook} from "../api/bookApi";

export const BrowserBookContainer = connect(state => {
        return state.bookStore;
    },
    dispatch => ({
        editHandler(id) {
            getBookById(id).then(book => {
                dispatch(actionSetBookToEdit(book));
            });

        },
        onloadBooks() {
            getAllBook().then(books => {
                dispatch(actionSetBooks(books));
            }).catch(e => {
                dispatch(actionSetBooks(testArrBook));
            });

        }, removeHandler(id) {
            deleteBook(id).then(r => {
                return getAllBook();
            }).then(books => {
                dispatch(actionSetBooks(books));
            });
        },
        addHandler() {
            dispatch(actionCreateNewBook());
        }
    }))(BookBrowser);


//**TEST DATA**//
let testArrBook = [{
    title: "BOOK !",
    author: "AUTHOR",
    genre: "GENRE",
    id: 1
},
    {
        title: "BOOK !",
        author: "AUTHOR",
        genre: "GENRE",
        id: 2
    }];