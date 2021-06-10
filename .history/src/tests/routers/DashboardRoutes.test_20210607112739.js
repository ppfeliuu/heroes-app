import { shallow } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe("Test Dashboard routes", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  test("should show component", () => {
    const wrapper = shallow(<DashboardRoutes />);

    expect(wrapper).toMatchSnapshot();
  });
});
