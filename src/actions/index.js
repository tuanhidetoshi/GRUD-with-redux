import { FETCH_DATA, ADD_DATA, REMOVE_DATA } from "./type";

export const fetch_data = () => ({
  type: FETCH_DATA
});

export const add_data = (id, name, msg) => ({
  type: ADD_DATA,
  payload: {
    id,
    name,
    msg
  }
});

// export const edit_data = () => {
//   type: FETCH_DATA;
// };

export const remove_data = id => ({
  type: REMOVE_DATA,
  payload: id
});
