import { API } from "./services";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./components/Home";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("fetch list of pokemons", async () => {
  await API.get("pokemon").then((res) =>
    expect(res.data.results.length).toBe(20)
  );
});

test("fetch next page", async () => {
  let nextUrl: string = "";
  await API.get("pokemon").then((res) => (nextUrl = res.data.next));

  await API.get(nextUrl).then((res) =>
    expect(res.data.results.length).toBe(20)
  );
});

test("fetch previous page on first render", async () => {
  let previousUrl: string = "";
  await API.get("pokemon").then((res) => (previousUrl = res.data.previous));

  expect(previousUrl).toBe(null);
});

test("get previous url on second page", async () => {
  let previousUrl: string = "";
  await API.get("pokemon?offset=20&limit=20").then(
    (res) => (previousUrl = res.data.previous)
  );

  expect(previousUrl).toBe(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
});

test("get to favorite page", () => {
  render(<Home />);
  const favoritesBtn = screen.getByTestId("favorites-button");

  fireEvent.click(favoritesBtn);

  const favorites = screen.getByText(/favorites/i);
  expect(favorites).toBeInTheDocument();
});
