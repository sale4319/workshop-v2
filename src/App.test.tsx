import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const RenderComponent = (
  <MemoryRouter>
    <App />
  </MemoryRouter>
);

describe("Test application", () => {
  test("renders homepage", () => {
    render(RenderComponent);

    const favoriteButton = screen.getByTestId("Favorite-outline");
    expect(favoriteButton).toBeInTheDocument();
  });

  test("renders favorite icon full when clicked", () => {
    render(RenderComponent);

    const favoriteButton = screen.getByTestId("Favorite-outline");
    expect(favoriteButton).toBeInTheDocument();

    userEvent.click(favoriteButton);

    const favoriteButtonClicked = screen.getByTestId("Favorite-full");
    expect(favoriteButtonClicked).toBeInTheDocument();
  });

  test("renders react logo when favored", () => {
    render(RenderComponent);

    const favoriteButton = screen.getByTestId("Favorite-outline");
    expect(favoriteButton).toBeInTheDocument();

    const noReactLogo = screen.queryByTestId("React-logo");
    expect(noReactLogo).not.toBeInTheDocument();

    userEvent.click(favoriteButton);

    const favoriteButtonClicked = screen.getByTestId("Favorite-full");
    expect(favoriteButtonClicked).toBeInTheDocument();

    const reactLogo = screen.getByTestId("React-logo");
    expect(reactLogo).toBeInTheDocument();
  });

  test("react logo click changes route to about", () => {
    render(RenderComponent);

    const favoriteButton = screen.getByTestId("Favorite-outline");
    expect(favoriteButton).toBeInTheDocument();

    const noReactLogo = screen.queryByTestId("React-logo");
    expect(noReactLogo).not.toBeInTheDocument();

    userEvent.click(favoriteButton);

    const favoriteButtonClicked = screen.getByTestId("Favorite-full");
    expect(favoriteButtonClicked).toBeInTheDocument();

    const reactLogo = screen.getByTestId("React-logo");
    expect(reactLogo).toBeInTheDocument();

    userEvent.click(reactLogo);

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/About");
  });
});
