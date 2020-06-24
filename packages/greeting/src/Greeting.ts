const GREETINGS = [
	'hello',
	'sup',
	'yo',
	'🤙',
];

export function greet() {
	const randomInt = Math.floor(Math.random() * Math.floor(GREETINGS.length - 1));
	return GREETINGS[randomInt];
}
