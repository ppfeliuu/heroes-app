import { types } from "../types/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return state;

    default:
      return state;
  }
};
