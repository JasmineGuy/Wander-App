const ADD_FAVORITE = "ADD_FAVORITE";

//action creators
export function addFavorite(listing) {
  return {
    type: ADD_FAVORITE,
    payload: listing,
  };
}

//initial state
const initialState = {
  favorites: [],
};

export default function favoritesReducer(state = initialState, action) {
  console.log("action:", action);
  switch (action.type) {
    case ADD_FAVORITE:
      const copy = [...state.favorites, action.payload];
      console.log("copy:", copy);
      return {
        ...state,
        favorites: copy,
      };
    default:
      return state;
  }
}
