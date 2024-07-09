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

	for (let t = 0; t < T; t++) {
		const N = parseInt(inputLines[index++], 10);
		const array = inputLines[index++].split(' ').map(Number);

		const frequency = {};
		let maxFreq = 0;

		for (let num of array) {
			frequency[num] = (frequency[num] || 0) + 1;
			if (frequency[num] > maxFreq) {
				maxFreq = frequency[num];
			}
		}

		results.push(N - maxFreq);
	}

	console.log(results.join('\n'));
});
