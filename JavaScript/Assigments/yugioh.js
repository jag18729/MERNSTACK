class Card {
  constructor(name, cost){
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name,cost,power,res){
    super(name,cost);
    this.power = power;
    this.res = res;
  }
  showStats() {
    console.log(`The name is, ${this.name}|| The cost is ${this.cost}|| The power is ${this.power}|| The resistance is ${this.res}`)
  }
  attack(target){
    target.res = target.res - this.power;
    console.log('Attacked!!!!!!')
    return target.res
  }
}

class Effect extends Card{
  constructor(name,cost,text,stat,magnitude){
    super(name,cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  showStats() {
    console.log(`The name is ${this.name}, The cost is ${this.cost}, The text is ${this.text}, The magnitude is ${this.magnitude}`)
  }
  play( target ) {
        if( target instanceof Unit ) {
            if (this.stat === 'res') {
              target.res += this.magnitude
              }
            else if (this.stat === 'power'){
              target.power += this.magnitude
            }
            console.log('Played!!!!')
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
redBeltNinja.showStats();


const blackBeltNinja = new Unit("Black Belt Ninja",  4, 5, 4);
blackBeltNinja.showStats();
redBeltNinja.attack(blackBeltNinja); //Turn 3 
blackBeltNinja.showStats();


const hardAlgorithm = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
hardAlgorithm.showStats();
hardAlgorithm.play(redBeltNinja);// turn 1
redBeltNinja.showStats();

const unhandledPromiseRejection = new Effect ("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
unhandledPromiseRejection.showStats();
unhandledPromiseRejection.play(redBeltNinja);//turn 2
redBeltNinja.showStats();

const pairPrograming = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", 2);
pairPrograming.showStats();

pairPrograming.play(redBeltNinja);
redBeltNinja.showStats();