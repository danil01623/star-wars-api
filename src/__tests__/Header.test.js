import React from "react";
import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Header from "../Layout/Header";

describe("Render Header", () => {
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
          <Header />
        </Provider>
      </BrowserRouter>
    );

  it("render h2 element", () => {
    renderWrapper();
    expect(screen.getByText("Star Wars")).toBeInTheDocument();
  });

  it("Should have a navigation link with text", () => {
    renderWrapper();

    const navigation = screen.getByRole("link");

    expect(navigation).toBeInTheDocument();
    expect(navigation).toHaveAttribute("href", "/favorites");
    expect(screen.getByText("Favorite List")).toBeInTheDocument();
  });
});
