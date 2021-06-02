import {createStore, combineReducers} from "redux";
import {mainStore} from "./reducer/mainStore";
import {bookStore} from "./reducer/bookStore";
import {authorStore} from "./reducer/authorStore";
import {genreStore} from "./reducer/genreStore";
import {formStore} from "./reducer/formStore";

export const store = createStore(combineReducers({mainStore, bookStore, authorStore, genreStore,formStore}));