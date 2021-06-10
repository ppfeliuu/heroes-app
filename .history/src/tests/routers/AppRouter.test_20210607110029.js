import { shallow } from "enzyme";
import { Login } from "../../components/login/Login";
import { AppRouter } from "../../routers/AppRouter";

describe("Test AppRouter", () => {
  test("should show login if no auth", () => {
    const wrapper = shallow(<AppRouter />);

    console.log(wrapper.html());
  });
});
