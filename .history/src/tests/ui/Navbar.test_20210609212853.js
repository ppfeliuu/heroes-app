import { mount } from "enzyme";
import { Navbar } from "../../components/ui/Navbar";

describe("test navbar", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  const wrapper = mount(<Navbar />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
