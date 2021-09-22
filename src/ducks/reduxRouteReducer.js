const SET_REDUX_ROUTE = "SET_REDUX_FAVORITE";

//action creators
export function setReduxRoute(reduxRoute) {
  return {
    type: SET_REDUX_ROUTE,
    payload: reduxRoute,
  };
}

//initial state
const initialState = {
  reduxRoute: "",
};

export default function reduxRouteReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REDUX_ROUTE:
      return {
        ...state,
        reduxRoute: action.payload,
      };
    default:
      return state;
  }
}
