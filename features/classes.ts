class Vehicle {
	color: string;

	constructor(color: string) {
		this.color = color;
	}

	protected honk(): void {
		console.log('beep')
	}
}

const vehicle = new Vehicle('silver');
console.log(vehicle.color);

class Car extends Vehicle {
	constructor(wheels: number, color: string) {
		super(color);
		this.wheels = wheels;
	}

	private drive(): void {
		console.log('vrooom vrooom')
	}

	public startDrivingProcess(): void {
		this.drive()
		this.honk()
	}
}

const car = new Car(4, 'red');
car.startDrivingProcess()
