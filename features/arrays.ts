const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const carsByMake: string[][] = [
	['f150'],
	['corolla'],
	['camaro']
]

// help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push('tesla')

// Flex types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10']