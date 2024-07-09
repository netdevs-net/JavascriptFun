const readline = require('readline');

// Create an interface to read data from stdin (standard input)
const rl = readline.createInterface({
	input: process.stdin, // Set the input stream to process.stdin
	output: process.stdout, // Set the output stream to process.stdout
	terminal: false, // Disable terminal control
});

// Initialize an array to store each line of input
const inputLines = [];

// Event listener for 'line' event, triggered for each new line of input
rl.on('line', line => {
	inputLines.push(line); // Add the input line to the inputLines array
});

// Event listener for 'close' event, triggered when the input stream is closed
rl.on('close', () => {
	// Parse the number of test cases from the first line of input
	const testCases = parseInt(inputLines[0], 10);
	let index = 1; // Initialize the index to track the current position in inputLines

	// Loop through each test case
	for (let i = 0; i < testCases; i++) {
		// Change from i <= testCases to i < testCases
		// Parse the number of dolls for the current test case
		const N = parseInt(inputLines[index], 10);
		// Extract the list of dolls for the current test case and convert them to numbers
		const dolls = inputLines.slice(index + 1, index + 1 + N).map(Number);
		// Find the doll with an odd count using the findOdd function
		const result = findOdd(dolls);
		// Output the result
		console.log(result);
		// Move the index to the start of the next test case
		index += N + 1;
	}
});

// Function to find the doll that appears an odd number of times
function findOdd(dolls) {
	// Create a new Map to store the frequency of each doll
	const map = new Map();

	// Loop through each doll in the list to count frequencies
	dolls.forEach(doll => {
		// Increment the count for the doll in the map, or set it to 1 if it's not already in the map
		map.set(doll, (map.get(doll) || 0) + 1);
	});

	// Loop through the entries of the map to find the doll with an odd count
	for (const [doll, count] of map.entries()) {
		if (count % 2 === 1) {
			// Check if the count is odd
			return doll; // Return the doll with an odd count
		}
	}

	return 0; // Default return value if no doll with an odd count is found (though this should not occur in context)
}
