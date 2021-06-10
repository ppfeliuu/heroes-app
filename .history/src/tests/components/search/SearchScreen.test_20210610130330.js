import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { SearchScreen } from "../../../components/search/SearchScreen";

describe("tes Search Screen", () => {
  test("should show ok with default data", () => {
    const wrapper = mount(
      <MemoryRouter>
        <SearchScreen />
      </MemoryRouter>
    );
  });
});
