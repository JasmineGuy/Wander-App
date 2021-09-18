const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

//action creators
export function addFavorite(listing) {
  return {
    type: ADD_FAVORITE,
    payload: listing,
  };
}

export function removeFavorite(id) {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
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
    case REMOVE_FAVORITE:
      const deleteCopy = [...state.favorites];
      // console.log("dltcopy:", deleteCopy);
      const final = deleteCopy.filter((x) => x.property_id !== action.payload);
      console.log("final:", final);
      return {
        ...state,
        favorites: final,
      };
    default:
      return state;
  }
}
