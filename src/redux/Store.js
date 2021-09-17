import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import Reducer from "./Reducer";

const rootReducer = combineReducers({
  trip: Reducer,
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
