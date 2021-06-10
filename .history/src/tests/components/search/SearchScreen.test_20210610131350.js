import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import { SearchScreen } from "../../../components/search/SearchScreen";

describe("tes Search Screen", () => {
  test("should show ok with default data", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(".alert-info").text().trim()).toBe("Search hero");
  });

  test("should show batman and input with query string", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");

    expect(wrapper).toMatchSnapshot();
  });

  test("should show an error if not find a hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find(".alert-danger").prop("value")).toBe("No hero found");

    expect(wrapper).toMatchSnapshot();
  });
});
