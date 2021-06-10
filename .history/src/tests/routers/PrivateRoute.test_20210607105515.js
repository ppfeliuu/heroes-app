import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe("test in Private Route", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("should show component if auth and save in localstorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={true}
          component={() => <span>Ok</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/mervel");
  });

  test("should check localstorage", () => {});
});
