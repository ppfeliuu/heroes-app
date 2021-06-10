import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router";
import { AuthContext } from "../../auth/AuthContext";
import { Navbar } from "../../components/ui/Navbar";
import { types } from "../../types/types";

describe("test navbar", () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Pedro",
    },
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(".text-info").text().trim()).toBe("Pedro");
  });

  test("should call logout and history", () => {
    wrapper.find("button").prop("onClick")();

    expect(contextValue.dispatch).toHaveBeenLastCalledWith({
      type: types.logout,
    });
  });
});
