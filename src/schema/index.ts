// Modules
import { productQueries, productMutation, productSchema } from "./products";

// Libraries
import { gql } from "apollo-server-express";

export const schema = gql`
  # Products
  ${productSchema}
  ${productQueries}
  ${productMutation}
`;
