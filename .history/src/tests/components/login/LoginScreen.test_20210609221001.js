import { shallow } from "enzyme";
import { Login } from "../../../components/login/Login";

describe("test Login", () => {
  const wrapper = shallow(<Login />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
