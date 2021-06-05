import {connect} from "react-redux";
import CustomGrid from "../component/customGrid";
import {getAllGenre, getGenreById, removeGenreById} from "../api/genreApi";
import {actionSetGenres} from "../action/genreStoreAction";
import {actionCreateNewGenre, actionSetGenreToEdit} from "../action/formStoreAction";
import "../../style/customGrid.css";

export const GenreCustomGridContainer = connect(state => {
        return state.genreStore
    },
    dispatch => ({
        onloadData() {
            getAllGenre().then(genres => {
                dispatch(actionSetGenres(genres));
            }).catch(e => {

            });
        }, editHandler(id) {
            getGenreById(id).then(genre => {
                dispatch(actionSetGenreToEdit(genre));
            });
        },
        removeHandler(id) {
            removeGenreById(id).then(resp => {
                return getAllGenre();
            }).then(genres => {
                dispatch(actionSetGenres(genres))
            });
        },
        addHandler() {
            dispatch(actionCreateNewGenre());
        }
    }))(CustomGrid);
