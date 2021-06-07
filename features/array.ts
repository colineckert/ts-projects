const carMakers = ['ford', 'toyota', 'chevy'];
const carMakers2: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]
const carsByMake2: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0]; // knows car will be a type string
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const importantDates2: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());