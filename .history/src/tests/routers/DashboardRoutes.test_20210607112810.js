import { shallow } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe("Test Dashboard routes", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  test("should show component", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <DashboardRoutes />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
