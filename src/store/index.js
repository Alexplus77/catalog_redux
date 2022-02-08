import {createStore, combineReducers} from "redux";
import {itemListReducer} from "reducers/itemListReducer";
import {valueInputReducer} from "reducers/valueInputReducer";

const reducer=combineReducers({
    itemsListReducer:itemListReducer,
    valueInputReducer:valueInputReducer
})

const store=createStore(reducer)
export {store}