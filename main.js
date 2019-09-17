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

const event_data = [
	{
		name: 'Welcome to my Ted Talk', 
		room: 342, 
		presenter: user_data[0], 
		start: 12, 
		end: 13,
	},
	{
		name: 'Underwater basketweaving for dummies', 
		room: 222, 
		presenter: user_data[1],
		start: 14,
		end: 16,
	}, 
	{
		name: 'The history and origins of Squid', 
		room: 124, 
		presenter: user_data[2], 
		start: 8,
		end: 9,
	},
]
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
	type Event {
		name: String, 
		room: Int, 
		presenter: User, 
		start: Int, 
		end: Int,
	}
  type Query {
    hello: String
		users: [User],
		events: [Event],
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
		events: () => event_data,
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
