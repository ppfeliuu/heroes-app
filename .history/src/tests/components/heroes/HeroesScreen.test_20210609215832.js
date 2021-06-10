import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
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
  });
});
