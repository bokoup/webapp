import { createClient, type Client } from "graphql-ws";

let graphqlClient: Client;

declare global {
  var __graphqlClient: Client | undefined;
}

if (process.env.NODE_ENV === "production") {
  let url = process.env.GRAPHQL_API || "";
  graphqlClient = createClient({
    url: url.replace(/^http:\/\//i, "wss://"),
  });
} else {
  if (!global.__graphqlClient) {
    global.__graphqlClient = createClient({
      url: process.env.GRAPHQL_API || "",
    });
  }
  graphqlClient = global.__graphqlClient;
}

export { graphqlClient };
