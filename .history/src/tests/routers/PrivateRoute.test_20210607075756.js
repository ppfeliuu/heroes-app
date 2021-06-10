import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe("test in Private Route", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };
  test("should show component if auth and save in localstorage", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <PrivateRoute
          isAuth={true}
          component={() => <span>Ok</span>}
          {...props}
        />
      </MemoryRouter>
    );

    console.log(wrapper.html());
  });
});
