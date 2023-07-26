let apples: number = 5;
apples = 10;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// ilt in objects

let now: Date = new Date();

const logNumber: (i: number) => void = (i: number) => {
	console.log(i)
}

// When to use annotations
// Function that returns the 'any' type

const json = '{"x": 10, "y": 20}'
const cordinates: {x:number; y:number} = JSON.parse(json)

console.log(cordinates)

// When declaring a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;


for (let i = 0; i < words.length; i++){
	if (words[i] === 'green') {
		foundWord = true;
	}
}

// Variables whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
	if (numbers[i] > 0){
		numberAboveZero = numbers[i]
	}
}
