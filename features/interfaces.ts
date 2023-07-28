interface Reportable {
	summary(): string
}

const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name} Broken?: ${this.broken}`
	}
};

const sprite = {
	color: 'clear',
	carbonated: true,
	sugar: 61,
	summary(): string {
		return `This item has a ${this.color} color and has ${this.sugar}g of sugar`
	}
};

// const printVehicle = (vehicle: Vehicle): void => {
// 	console.log(`Your car ${vehicle.name} from year ${vehicle.year} is ${vehicle.broken ? 'broken' : 'not broken'}`)
// }

const logItem = (item: Reportable): void => {
	console.log(item.summary())
}

// printVehicle(oldCivic)
logItem(sprite)