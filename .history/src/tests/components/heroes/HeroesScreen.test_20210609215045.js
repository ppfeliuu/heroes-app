import { mount } from "enzyme";
import { HeroesScreen } from "../../../components/heroes/HeroesScreen";

describe("test HeroeScreen", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  const wrapper = mount(<HeroesScreen history={history} />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
