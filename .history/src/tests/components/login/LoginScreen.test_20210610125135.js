import { shallow } from "enzyme";
import { Login } from "../../../components/login/Login";

describe("test Login", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
    replace: jest.fn(),
  };

  const wrapper = shallow(<Login />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
