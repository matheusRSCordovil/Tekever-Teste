import { API } from "./services";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./components/Home";
import { handleIsFavorite } from "./helpers/handleIsFavorite";
import { handleFavorite } from "./helpers/handleFavoriteList";

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

test("go to favorite page", () => {
  render(<Home />);
  const favoritesBtn = screen.getByTestId("favorites-button");

  fireEvent.click(favoritesBtn);

  const favorites = screen.getByText(/favorites/i);
  expect(favorites).toBeInTheDocument();
});

test("favorites save and retrieve of localStorage", () => {
  const favorites: any[] = [
    {
      id: 1,
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      id: 2,
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
  ];

  handleFavorite("100", favorites, favorites[0], (arg0: string[]) => "nothing");

  const list = localStorage.getItem("favorites");

  // @ts-ignore
  expect(JSON.parse(list).length).toBe(3);
});

test("function handleIsFavorite functionality", () => {
  const favorites: any[] = [
    {
      id: 1,
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      id: 2,
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
  ];

  localStorage.setItem("favorites", JSON.stringify(favorites));

  expect(handleIsFavorite("1")).toBe(true);
});

test("favorites remove item from localStorage", () => {
  const favorites: any[] = [
    {
      id: "1",
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      id: "2",
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
  ];

  handleFavorite("1", favorites, favorites[0], (arg0: string[]) => "nothing");

  const list = localStorage.getItem("favorites");

  // @ts-ignore
  expect(JSON.parse(list).length).toBe(1);
});
