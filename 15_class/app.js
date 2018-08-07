class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`Bark! Bark! My name is ${this.name}`);
  }

  cuddle() {
    console.log('I love you owner!');
  }

  // static function
  // like class method in other language
  static info() {
    console.log('A dog is a man best friend!');
  }

  // getter and setter
  get description() {
    return `${this.name} is a ${this.breed} type of dog`;
  }

  set nickname(nickname) {
    this.nick = nickname.trim();
  }

  get nickname() {
    return this.nick;
  }
}

const tuni = new Dog('Tuni', 'Chihuahua');
const jay = new Dog('Jay', 'Mongolian');

tuni.bark();
jay.bark();
jay.cuddle();

Dog.info();

console.log(jay.description);

jay.nickname = 'JJ';

console.log(jay.nickname);

// ---- extends a class
class Animal {
  constructor(name) {
    this.name = name;
    this.thirst = 100;
    this.belly = [];
  }

  drink() {
    this.thirst -= 10;
    return this.thirst;
  }

  eat(food) {
    this.belly.push(food);
    return this.belly;
  }
}

class Rhino extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const rhiney = new Rhino('Rhiney', 'Affrican');

rhiney.drink();
rhiney.eat('Glass');


// ---- Example: extends an Array

class MovieCollection extends Array {
  constructor(name, ...movies) {
    super(...movies);
    this.name = name;
  }

  add(movie) {
    this.push(movie);
  }

  get movieTitles() {
    return this.map(movie => movie.title);
  }

  topRated(limit = 10) {
    this.sort((a, b) => b.rating - a.rating);
    return this.slice(0, limit);
  }
}

const collection = new MovieCollection('My favorite movies',
  {title: 'Fightclub', rating: 10},
  {title: 'Shame', rating: 7},
  {title: 'Warriors', rating: 9});

collection.add({title: 'Brave', rating: 8});

console.table(collection);

console.table(collection.topRated(3));
