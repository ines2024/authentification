import { combineReducers } from "redux";
import {reducer} from "./Reducer"
import { errorreducer } from "./Errorreducer";
export const combinereducer=combineReducers({
    reducer,errorreducer
})