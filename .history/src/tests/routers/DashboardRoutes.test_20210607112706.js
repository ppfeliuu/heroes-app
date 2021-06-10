import { shallow } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe("Test Dashboard routes", () => {
  test("should show component", () => {
    const wrapper = shallow(<DashboardRoutes />);

    expect(wrapper).toMatchSnapshot();
  });
});
