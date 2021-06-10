import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("test authReducer", () => {
  test("should return default state", () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test("should auth user and set user name", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Pedro",
      },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({ logged: true, name: "Pedro" });
  });

  test("should delete user name and logged to false", () => {});
});
