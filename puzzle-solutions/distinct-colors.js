const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const inputLines = [];
rl.on('line', line => inputLines.push(line));

rl.on('close', () => {
	let index = 0;
	const T = parseInt(inputLines[index++], 10);
	const results = [];

	for (i = 0; i < T; i++) {
		const N = parseInt(inputLines[index++], 10);
		const A = inputLines[index++].split(' ').map(Number);

		let uniqueColors = new Set(A);
		const maxBalls = Math.max(...A);

		// The number of boxes needed is equal to the maximum number of balls of any single color
		results.push(maxBalls);

		// results.push(uniqueColors.size);
	}
	results.forEach(result => console.log(result));
});
