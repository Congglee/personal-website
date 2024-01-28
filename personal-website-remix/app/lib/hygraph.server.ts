import { GraphQLClient } from "graphql-request";

export const hygraph = new GraphQLClient(
  process.env.HYGRAPH_API_KEY as string,
  {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
    },
  }
);
