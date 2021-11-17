


let Animal = function() {
    if (this.constructor === Animal) {
      throw new Error("Can't instantiate abstract class!");
    }
};

Animal.prototype.say = function() {
    throw new Error("Abstract method!");
}

let Cat = function() {
    Animal.apply(this, arguments);
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function() {
    console.log('meow');
}

let Dog = function() {
    Animal.apply(this, arguments);
};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.say = function() {
    console.log('bark');
}

var cat = new Cat();
var dog = new Dog();

cat.say();
dog.say();