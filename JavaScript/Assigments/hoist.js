1
console.log(hello);                                   
var hello = 'world';     

// var hello;
// console.log(hello);
// hello = 'world';

2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

function test() {
    var needle;
    needle = 'magnet';
    console.log(needle);
}
var needle;
needle = 'haystack';
test(); //prediction: 'magnet'

3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

function print() {
    var brendan
    brendan = 'only okay'
    console.log(brendan)
}
var brendan
brendan = "super cool";
console.log(brendan)//prediction: 'super cool'

4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


function eat() {
    var food
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
var food
food = 'chicken';
console.log(food);//prediction: 'chicken'
eat();//prediction: 'half-chicken'

5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

var mean = function() {
    var food
    food = "fish";
    console.log(food);
    food = "chicken";
    console.log(food);
}
mean()//prediction: mean is not a function
console.log(food)
console.log(food)
6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


function rewind() {
    var genre;
    genre = "rock";
    console.log(genre)
    genre = "r&b";
    console.log(genre);
}
var genre
// -----------------------
console.log(genre); // prediction undefined
genre = "disco"
rewind(); // prediction 'r&b', "rock"
console.log(genre); // prediction 'disco'

7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

function learn() {
    var dojo
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
var dojo
dojo = "san jose";
console.log(dojo); // prediction San Jose
learn(); // prediction seattle, burbank
console.log(dojo); //prediction San Jose

8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}