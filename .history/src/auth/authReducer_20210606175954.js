import { types } from "../types/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    default:
      return state;
  }
};
