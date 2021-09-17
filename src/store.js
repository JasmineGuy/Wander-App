import { createStore, combineReducers } from "redux";
import favoritesReducer from "./ducks/favoritesReducer";

const combinedReducers = combineReducers({
  favoritesReducer: favoritesReducer,
});

const store = createStore(combinedReducers);

export default store;
