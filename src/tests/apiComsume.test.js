import { API } from "../services";

test("fetch call", async () => {
  await API.get("pokemon").then((res) =>
    expect(res.data.results.length).toBe(20)
  );
});
