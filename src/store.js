import { createStore, combineReducers } from "redux";
import favoritesReducer from "./ducks/favoritesReducer";
import reduxRouteReducer from "./ducks/reduxRouteReducer";

const combinedReducers = combineReducers({
  favoritesReducer: favoritesReducer,
  reduxRouteReducer: reduxRouteReducer,
});

const store = createStore(combinedReducers);

export default store;
