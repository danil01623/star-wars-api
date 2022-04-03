import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../Views/Homepage";

describe("Render Homepage", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const store = mockStore(initialState);
  useSelectorMock.mockReturnValue(
    (state) => state.favorites.totalFavoriteAmount
  );
  const renderWrapper = () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </BrowserRouter>
    );

  it("Should have a select element and an input and input value to update correctly", () => {
    renderWrapper();

    const select = screen.getByTestId("select");
    const input = screen.getByRole("textbox");
    UserEvent.type(input, "Luke");

    expect(select).toBeInTheDocument();
    expect(input.value).toBe("Luke");
  });
});
