const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const Sequelize = require('sequelize');
const { users, events } = require('./data.js');

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
		serverSource: String,
	}
	type Mutation {
		changeHello(hello: String!): String
	}
`;
var hello_str = 'Hello world!';

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		events: () => events,
		users: () => users,
		hello: () => hello_str,
		serverSource: () => 'https://github.com/saresend/apollo-server-PoC',
	},
	Mutation: {
		changeHello: (root, args) => {
			hello_str = args.hello;
			return hello_str;
		}
	}
};
/*
const DB_URL = 'dev-hacksc-odyssey.c4ukl2tqzuiz.us-west-1.rds.amazonaws.com:3306';
var sequelize = new Sequelize('mysql://devHackSC:${bobby_DROP_table}@' + DB_URL);
*/
const server = new ApolloServer({ typeDefs, resolvers });
/*
const User = sequelize.define('user', {

    age : {
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
    picture: {
        type: Sequelize.STRING, 
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING, 
        allowNull: false, 
    }
});
User.sync({ force: true }).then(() => {
    return User.create({
        age: 10, 
        picture: 'null', 
        firstName: 'Stiven', 
        lastName: 'No',
    });
});
sequelize.authenticate().then(() => {
	console.log('Successfully Authenticated to database')
}).catch(err => {
	console.log('failed because ' + err);
})
*/
const app = express();
server.applyMiddleware({ app });

app.listen({ host: '0.0.0.0', port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
