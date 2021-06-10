import { shallow } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { Login } from "../../../components/login/Login";

describe("test Login", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
    replace: jest.fn(),
  };

  const wrapper = shallow(
  <AuthContext.Provider value={}>
    <Login />

  </AuthContext.Provider>
  );

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
