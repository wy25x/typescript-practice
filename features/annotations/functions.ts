const add = (a: number, b: number): number => {
	return a + b;
}

const subtract = (a:number, b:number): number => {
	return a - b;
}

function divide(a: number, b: number): number {
	return a / b;
}

function multiply(a: number, b: number): number {
	return a * b;
}

const logger = (message: string): void => {
	console.log(message)
}

const todaysWeather = {
	date: new Date(),
	weather: 'sunny'
}

const logWeather = ({ date, weather }: { date: Date, weather: string}): void => {
	console.log(date)
	console.log(weather)
}

// const logWeather2 = ({date, weather}) => {
// 	console.log(date)
// 	console.log(weather)
// }

logWeather(todaysWeather);
