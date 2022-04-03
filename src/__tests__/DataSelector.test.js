import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import configureStore from "redux-mock-store";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DataSelector from "../Views/DataSelector";

describe("Render Data selector", () => {
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
          <DataSelector />
        </Provider>
      </BrowserRouter>
    );

  it("Should have a select element and a button", () => {
    renderWrapper();

    const select = screen.getByTestId("select");
    const button = screen.getByRole("button");

    expect(select).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Simulate selection", () => {
    renderWrapper();

    const select = screen.getByTestId("select");

    fireEvent.change(select, { target: { value: "films" } });
    let options = screen.getAllByTestId("select-option");
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
    expect(options[3].selected).toBeFalsy();
  });
});
