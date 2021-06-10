import { shallow } from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe("test in Private Route", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };
  test("should show component if auth and save in localstorage", () => {
    const wrapper = shallow(
      <PrivateRoute
        isAuth={true}
        component={() => <span>Ok</span>}
        {...props}
      />
    );
  });
});
