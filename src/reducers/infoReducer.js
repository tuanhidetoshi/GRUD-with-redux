import { FETCH_DATA, ADD_DATA, REMOVE_DATA } from "../actions/type";

const initialState = [];

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return state;
    case ADD_DATA:
      return [...state, action.payload];
    case REMOVE_DATA:
      console.log(state);
      return state.filter(a => a.id !== action.payload);
    default:
      return state;
  }
};
