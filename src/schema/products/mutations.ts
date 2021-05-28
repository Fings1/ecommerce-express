// Libraries
import { gql } from "apollo-server-express";

export const productMutation = gql`
  type Mutation {
    saveProducts(id: Int!, title: String): Product!
  }
`;
