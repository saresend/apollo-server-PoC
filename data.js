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

module.exports.users = user_data;
module.exports.events = event_data;
