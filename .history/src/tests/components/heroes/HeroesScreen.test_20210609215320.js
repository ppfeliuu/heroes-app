import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { HeroesScreen } from "../../../components/heroes/HeroesScreen";

describe("test HeroeScreen", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  const wrapper = mount(
    <MemoryRouter initialEntries={["/hero"]}>
      <HeroesScreen history={history} />
    </MemoryRouter>
  );

  test("should show component redirect if there no url", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
