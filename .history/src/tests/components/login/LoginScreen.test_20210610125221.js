import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../../auth/AuthContext";
import { Login } from "../../../components/login/Login";

describe("test Login", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
    replace: jest.fn(),
  };

  const wrapper = mount(
  <AuthContext.Provider value={}>
    <MemoryRouter>

    <Login />
    </MemoryRouter>
  </AuthContext.Provider>
  );

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
