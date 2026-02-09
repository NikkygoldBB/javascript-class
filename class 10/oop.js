class Vehicle {
  #no_of_tyre = 0;
  // "V8" and "V12"
  #engine = "V8";
  // weight in kilograms
  #weight = 100;
  // Kmph
  #speed = 100;

  constructor() {}

  printAll() {
    const str = `${this.#no_of_tyre}, ${this.#engine}, ${this.#weight}, ${
      this.#speed
    }`;
    console.log(str);
  }
}

const toyota = new Vehicle();

// toyota.printAll();

const nissan = new Vehicle();

nissan.no_of_tyre = 8;
nissan.speed = 300;
nissan.weight = 1000;
console.log(nissan);
console.log(toyota);
