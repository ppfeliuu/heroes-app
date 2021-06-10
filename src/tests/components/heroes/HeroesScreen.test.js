import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import { HeroesScreen } from "../../../components/heroes/HeroesScreen";

describe("test HeroeScreen", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test("should show component redirect if there no url", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroesScreen history={history} />
      </MemoryRouter>
    );
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("should show hero if param exists", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route path="/hero/:heroId" component={HeroesScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find(".row").exists()).toBe(true);
  });

  test("should return to sreen before", () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroesScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect(history.push).toHaveBeenCalledWith("/");
    expect(history.goBack).not.toHaveBeenCalled();
  });

  test("should call goBack", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroesScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect(history.push).toHaveBeenCalledTimes(0);
    expect(history.goBack).toHaveBeenCalled();
  });

  test("should call redirect if hero no exist", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider3423"]}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroesScreen history={history} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe("");
  });
});
