import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe("Test AppRouter", () => {
  test("should show login if no auth", () => {
    const wrapper = mount(
      <AuthContext.Provider>
        <AppRouter />
      </AuthContext.Provider>
    );
  });
});
