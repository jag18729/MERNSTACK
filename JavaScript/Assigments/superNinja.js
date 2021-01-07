
// Create a Ninja class
//  add an attribute: name
//  add an attribute: health
//  add a attribute: speed - give a default value of 3
//  add a attribute: strength - give a default value of 3
//  add a method: sayName() - This should log that Ninja's name to the console
//  add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
//  add a method: drinkSake() - This should add +10 Health to the Ninja
 //

class Ninja {
  constructor(name, health, speed=3, strength=3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log(this.name)
  }
  
  showStats() {
    console.log(`This is the name ${this.name}, This is the strength ${this.strength}, This is the speed ${this.speed}, This is the health ${this.health}`)
  }

  drinkSake() {
    this.health += 10;
    return "What one programmer can do in one month, two programmers can do in two months."
  }
}

class Sensei extends Ninja {
  constructor(name, wisdom=10) {
      super(name, 200, 10);
      this.wisdom = wisdom
  }

  speakWisdom() {
    const speakWisdom = super.drinkSake();
    console.log(speakWisdom);
  }

  showStats() {
    console.log(`This is the name ${this.name}, This is the strength ${this.strength}, This is the speed ${this.speed}, This is the health ${this.health}, This is the wisdom ${this.wisdom}`);
  }
}

const ninja1 = new Ninja("Hyabusa", 15);
ninja1.sayName();
ninja1.showStats();
console.log(ninja1.drinkSake());
ninja1.showStats();

const superSensei = new Sensei("Master Splinter", 15);
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();

// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

// example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
//  create a class Sensei that inherits from the Ninja class
//  add an attribute: wisdom - default to 10
//  create a method: speakWisdom()
//  create a method: drinkSake()