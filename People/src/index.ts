import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { people } from "./data";

const typeDefs = gql`
  type Person @key(fields: "id") {
    id: ID!
    name: String
  }

  extend type Query {
    person(id: ID!): Person
    people: [Person]
  }
`;

const resolvers = {
  Person: {
    __resolveReference(object) {
      return people.find((person) => person.id === object.id);
    },
  },
  Query: {
    person(_, { id }) {
      return people.find((person) => person.id === id);
    },
    people() {
      return people;
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: process.env.PORT || 8081 }).then(({ url }) => {
  console.log(`People service ready at ${url}`);
});
