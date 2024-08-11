"use client";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import React from "react";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const uploadLink = createUploadLink({
  uri: "http://localhost:3000/api/graphql",
  headers: {
    "Apollo-Require-Preflight": "true",
  },
});

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
