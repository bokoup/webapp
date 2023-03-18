import { action } from "../index";

describe("action", () => {
  it("returns url", async () => {
    const url =
      "https://bokoup-proxy.imgix.net/https%3A%2F%2Farweave.net%2FBPQN9S0nGsgmVDiErb6LFiq4o2Sw6GxBFdNSbJnORL8?ixlib=js-3.7.1&w=256&h=256&fit=crop&q=100&s=8f987fa891f4ea37b7a2f36be9db955b";
    let body = JSON.stringify({
      url,
    });

    const request = new Request("http://localhost:3000/purge", {
      method: "POST",
      body,
    });

    const response = await action({ request, params: {}, context: {} });

    expect(response.status).toEqual(200);
  });
});
