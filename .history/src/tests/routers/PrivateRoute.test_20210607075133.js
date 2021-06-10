import { shallow } from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe("test in Private Route", () => {
  test("should show component if auth and save in localstorage", () => {
    const wrapper = shallow(<PrivateRoute />);
  });
});
