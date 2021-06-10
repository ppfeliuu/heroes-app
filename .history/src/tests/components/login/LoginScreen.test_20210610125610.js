import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../../auth/AuthContext";
import { Login } from "../../../components/login/Login";
import { types } from "../../../types/types";

describe("test Login", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  const history = {
    replace: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Login history={history} />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should do dispatch y replace history", () => {
    wrapper.find("button").prop("onClick")();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Pedro",
      },
    });
  });
});
