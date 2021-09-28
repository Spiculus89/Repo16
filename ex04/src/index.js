// Only change code below this line
class Pets {
    constructor(name, legs) {
        this._name = name;
        this._legs = legs;
    }
    walk(numberOfLegs) {
        return `${this._name} is walking on ${this._legs} legs`;
    }
}
class Dog extends Pets {
    constructor (name, legs) {
    super(Pets)
    this._name = name;
    this._legs = legs;
    }
    bark(dogSay) {
        return `${this._name} says ${dogSay}`;
    }
}

// Only change code above this line
const dog = new Dog('Pujdo', 4);
console.log(dog.walk());
console.log(dog.bark('WUF-WUF'));


module.exports = {
    Pets,
    Dog
}