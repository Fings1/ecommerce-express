// Libraries
import { gql } from "apollo-server-express";

// Types
import { productSchema } from "./product";

export const schema = gql`
  ${productSchema}

  type Query {
    products: [Product]
  }
`;
