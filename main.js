const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const user_data = [
    {
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": {
        "first": "Berger",
        "last": "Ferguson"
      }
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "name": {
        "first": "Sparks",
        "last": "Leach"
      }
    },
    {
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": {
        "first": "Andrews",
        "last": "Berger"
      }
    }
]; 
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type Name {
		first: String, 
		last: String,
	}
	type User { 
		picture: String, 
		age: Int, 
		name: Name, 
	}
  type Query {
    hello: String
		users: [User],
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
		users: () => user_data,		
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
