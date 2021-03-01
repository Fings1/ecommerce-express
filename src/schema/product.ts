import { gql } from "apollo-server-express";

export const productSchema = gql`
  type Product {
    id: Int
    title: String
  }
`;
