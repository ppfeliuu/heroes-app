import { shallow } from "enzyme";
import { HeroesScreen } from "../../../components/heroes/HeroesScreen";

describe("test HeroeScreen", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  const wrapper = shallow(<HeroesScreen history={history} />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
