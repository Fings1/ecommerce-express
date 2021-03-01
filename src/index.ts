// Libraries
import express from "express";
import { PrismaClient } from "@prisma/client";

import bodyParser from "body-parser";
import { ApolloServer, gql } from "apollo-server-express";

// Constants
import constants from "./constants";

// Schemas
import { schema } from "./schema";

// Prisma init
const prisma = new PrismaClient();

const app = express();

// Set app configuration
// app.use(cors());
// app.use(helmet());
app.use(bodyParser.json());

// Set graphql configuration
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     context: prisma,
//   })
// );

// app.get("/playground", playground({ endpoint: "/graphql" }));
// GRAPHQL

// Construct a schema, using GraphQL schema language

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    products: () => [],
  },
};

app.get("/", (req, res) => {
  return res.send("OK").status(200);
});

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.applyMiddleware({ app, path: "/graphql" });

app.listen(constants.APP_PORT, () => {
  console.log(`SERVER RUNNING IN  ${constants.APP_PORT}`);
});
