import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Search from "../Shared/Search";
import debounce from "lodash.debounce";

describe("Render Search", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const store = mockStore(initialState);

  useSelectorMock.mockReturnValue(
    (state) => state.favorites.totalFavoriteAmount
  );
  const dummyDispatch = jest.fn();
  useDispatchMock.mockReturnValue(dummyDispatch);
  const renderWrapper = () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );

  it("should receive a value", () => {
    renderWrapper();

    const input = screen.getByTestId("input");
    UserEvent.type(input, "test");
    expect(input.value).toBe("test");
  });

  // TODO TEST SEARCH WITH DEBOUNCE
  // it("call the callback every time input value is changed", () => {
  //   jest.mock("lodash/debounce");
  //   const searchHandler = jest.fn();

  //   render(<Search onChange={searchHandler} />);

  //   const input = screen.getByRole("textbox");

  //   UserEvent.type(input, "React");
  //   expect(handleChange).toHaveBeenCalledTimes(5);
  // });
});
