const greetings = [
	'Good morning',
	'Welcome to the Coffee House',
	'Sip a coffee, draw a doodle'
];

// exports.greetingsModule = function getGreeting() {
// 	let rand = Math.floor(Math.random() * greetings.length);
// };

function getGreeting ()  {
		let rand = Math.floor(Math.random() * greetings.length);
		return greetings[rand];
}

exports.greet = () => getGreeting();