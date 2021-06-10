import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { Navbar } from "../../components/ui/Navbar";

describe("test navbar", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Pedro'
    },
  };
  const wrapper = mount(
  <AuthContext.Provider value={ contextValue }>

      <Navbar />);
  </AuthContext.Provider>

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
