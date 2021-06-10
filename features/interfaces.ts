// can include any primitive types we want, plus functions
interface Reportable {
  summary(): string; // only one that is now required, addl properites are ok
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);