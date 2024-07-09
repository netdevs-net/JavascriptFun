const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

let inputLines = [];
rl.on('line', line => inputLines.push(line));

rl.on('close', () => {
	let index = 0;
	const T = parseInt(inputLines[index++], 10);
	const results = [];

	for (i = 0; i < T; i++) {
		const N = parseInt(inputLines[index++], 10);
		const A = inputLines[index++].split(' ').map(Number);

		let uniqueElements = new Set(A);
		let uniqueArray = Array.from(uniqueElements);

		results.push(uniqueArray.length);
		results.push(uniqueArray.join(' '));
	}
	console.log(results.join('\n'));
});
