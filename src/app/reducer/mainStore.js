import {deepClone} from "../util/clone";

let initState = {};

export const mainStore = (state = initState, action) => {
    let newState = deepClone(state);
    return newState;
};