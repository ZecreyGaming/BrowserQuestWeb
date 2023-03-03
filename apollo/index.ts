import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { GQL_API } from "config";

import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret":
        "j76XNG0u72QWBt4gS167wJlhnFNHSI5A6R1427KGJyMrFWI7s8wOvz1vmA4DsGos",
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(createHttpLink({ uri: GQL_API })),
});
