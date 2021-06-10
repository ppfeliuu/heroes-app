import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe("Test AppRouter", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  test("should show login if no auth", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("should show marvel component if is auth", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: "Pepe",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    // expect(wrapper).toMatchSnapshot();
    console.log(wrapper.html());
  });
});
