import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "people", url: "http://people_service:8081" },
    { name: "films", url: "http://films_service:8082" },
  ],
});

const server = new ApolloServer({
  gateway,
});

server.listen({ port: process.env.PORT || 8080 }).then(({ url }) => {
  console.log(`Gateway ready at ${url}`);
});
