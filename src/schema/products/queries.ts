// Libraries
import { gql } from "apollo-server-express";

export const productQueries = gql`
  type Query {
    products: [Product]
  }
`;
