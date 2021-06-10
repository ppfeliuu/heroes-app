import { authReducer } from "../../auth/authReducer";

describe("test authReducer", () => {
  test("should return default state", () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test("should auth user and set user name", () => {});

  test("should delete user name and logged to false", () => {});
});
