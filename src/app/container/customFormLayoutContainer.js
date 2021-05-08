import {connect} from "react-redux";
import CustomFormLayout from "../component/customFormLayout";
import {actionCloseForm, actionSetDataToSelect, actionSetValue} from "../action/formStoreAction";
import {actionReloadBooks} from "../action/bookStoreAction";
import {actionReloadAuthor} from "../action/authorStoreAction";
import {addAuthor, editAuthor, getAllAuthor} from "../api/authorApi";
import {addGenre, editGenre, getAllGenre} from "../api/genreApi";
import {editBook, addBook} from "../api/bookApi";
import c from "../constant/formStoreConstant";
import {actionReloadGenre} from "../action/genreStoreAction";


export const CustomFormLayoutContainer = connect(state => {
        return state.formStore;
    },
    dispatch => ({
        onLoadDataToSelect(name) {
            switch (name) {
                case "author":
                    getAllAuthor().then(authors => {
                        dispatch(actionSetDataToSelect({name, data: authors}));
                    });
                    break;
                case "genre":
                    getAllGenre().then(genres => {
                        dispatch(actionSetDataToSelect({name, data: genres}));
                    });
                    break;
            }
        },
        sendForm(formData, type) {
            switch (type) {
                case c.BOOK_EDIT:
                    editBook(formData).then(response => {
                        dispatch(actionReloadBooks())
                    }).then(r => dispatch(actionCloseForm()));
                    break;
                case c.CREATE_NEW_BOOK:
                    addBook(formData).then(response => {
                        dispatch(actionReloadBooks())
                    }).then(r => dispatch(actionCloseForm()));
                    break;
                case c.GENRE_EDIT:
                    editGenre(formData).then(response => {
                        dispatch(actionReloadGenre())
                    }).then(r => dispatch(actionCloseForm()));
                    break;
                case c.CREATE_NEW_GENRE:
                    addGenre(formData).then(response => {
                        dispatch(actionReloadGenre())
                    }).then(r => dispatch(actionCloseForm()));
                    break;
                case c.AUTHOR_EDIT:
                    editAuthor(formData).then(response => {
                        dispatch(actionReloadAuthor())
                    }).then(r => dispatch(actionCloseForm()));
                    break;
                case c.CREATE_NEW_AUTHOR:
                    addAuthor(formData).then(response => {
                        dispatch(actionReloadAuthor())
                    }).then(r => dispatch(actionCloseForm()));
                    break;
            }
        },
        setValue({name, value}) {
            dispatch(actionSetValue({name, value}));
        },
        close() {
            dispatch(actionCloseForm());
        }
    }))(CustomFormLayout);