const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

let inputLines = [];
rl.on('line', line => {
	inputLines.push(line);
});

rl.on('close', () => {
	let index = 0;
	const T = parseInt(inputLines[index++], 10);
	let results = [];

	for (let t = 0; t < T; t++) {
		const n = parseInt(inputLines[index++], 10);
		const days = inputLines[index++].split(' ').map(Number);

		// Use a Set to count unique days
		let uniqueDays = new Set(days);

		// The maximum number of friendships he can save is the number of unique days
		results.push(uniqueDays.size);
	}

	// Output all results
	results.forEach(result => console.log(result));
});
