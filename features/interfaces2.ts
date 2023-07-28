interface Reportable {
	summary(): string
}

interface Drink {
	color: string,
	carbonated: boolean,
	sugar: number,
	summary(): string
}

const sprite = {
	color: 'clear',
	carbonated: true,
	sugar: 61,
	summary(): string {
		return `This item has a ${this.color} color and has ${this.sugar}g of sugar`
	}
}

const printReport = (item: Reportable): void => {
	console.log(item.summary())
}

printReport(sprite)
