import { GraphQLClient } from "graphql-request";

export const strapi = new GraphQLClient(
  process.env.STRAPI_DOMAIN_GRAPHQL as string,
  {
    headers: {
      authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }
);
