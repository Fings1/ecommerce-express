// Libraries
import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";

// Constants
import constants from "./constants";

// Schemas
import { schema } from "./schema";

// Resolvers
import resolvers from "./resolvers";

const app = express();

app.use(bodyParser.json());

// Default healthcheck endpoint
app.get("/healthcheck", (req, res) => {
  return res.send("OK").status(200);
});

// Set apollo config
const server = new ApolloServer({ typeDefs: schema, resolvers });

server.applyMiddleware({ app, path: "/graphql" });

// Connection DB
createConnection({
  type: "postgres",
  host: constants.DB_HOST,
  port: constants.DB_PORT,
  username: constants.DB_USER,
  password: constants.DB_PASSWORD,
  database: constants.DB_NAME,
  entities: ["src/entities/*.ts"],
  synchronize: true,
})
  .then((connection) => {
    // Init express app
    app.listen(constants.APP_PORT, () => {
      console.log(`SERVER RUNNING IN  ${constants.APP_PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
