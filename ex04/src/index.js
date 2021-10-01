// Only change code below this line
class Pets {
    constructor(name, legs) {
        this._name = name;
        this._legs = legs;
    }
    walk() {
        let numberofLegs = `${this._name} is walking on ${this._legs} legs`
        return numberofLegs;
    }
}
class Dog extends Pets {
    constructor (name, legs) {
    super(name, legs)
    this._name = name;
    this._legs = legs;
    }
    bark() {
        let dogSay = `${this._name} says WUF-WUF`;
        return dogSay;
    }
}

// Only change code above this line
const dog = new Dog('Pujdo', 4);
console.log(dog.walk());
console.log(dog.bark());


module.exports = {
    Pets,
    Dog
}