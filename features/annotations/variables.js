var apples = 5;
apples = 10;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// ilt in objects
var now = new Date();
var logNumber = function (i) {
    console.log(i);
};
// When to use annotations
// Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var cordinates = JSON.parse(json);
console.log(cordinates);
// When declaring a variable on one line and initialize it later
var words = ['red', 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
// Variables whose type cannot be inferred correctly
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
