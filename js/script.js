var myVar = .7;

var mySay = document.write("hi");

var myName = 'saitama';

var mySentence = "What\'s up?";
console.log(mySentence);

var myBoolean = false;

var numA = 14;
var numB = 27;

var sumOfNum = numA + numB;
var multOfNum = numA * numB;

console.log(sumOfNum);

var myModulus = 5 % 2;

var myFullName = myName + " Kookie";

// Lets make an object literal made up of key value pairs
var me = {
  name: "Roofus",
  age: 32,
  from: "NY",
  occupation: "Web Developer",
  isAwesome: true,
  head: {
    eyes: 2,
    hairColor: "brown",
    appendix: false
  }
};

// we changed the age value
me.age = 33;
console.log(me.age);
console.log(me.head.hairColor);

// arrays are key value pairs where the key is anumber, arrays are created [], each element within an array is separated by a ,
// arrays can contain objects
var myArr = [55, "Panda", true, me];
console.log(myArr[3]);

me.hobbies = ["games", "code", "food"];
console.log(me.hobbies[0]);

var something;
// something is undefined
console.log(something);

// function declaration
function sayHello() {
  console.log("Welcome Mr.Boring");
}

//calls or invokes the function
sayHello();

//here we will call a function that will be defined later
sayHellTo("that\'s so wicked cool");
// this works cuz function declarations are hoisted to the top of the document when read by the browser

function sayHellTo(name) {
  var message = "Welcome to JS " + name + "!";
  console.log(message);
}
//the variable above is of local or functional scope (only exists within that funciton)
sayHellTo("Tresfa");


var sumNums = function(firstNum, secondNum) {
  var sum = firstNum + secondNum;
  // return will return the value of the sum variable to where the function is called, once return statement is triggered no further code in that function is executed
  return sum;
  console.log("This will not run");
};


sumNums(2,2);
// console.log(sumNums(2,2));

var mySum = sumNums(900, 2344);

var apollo = {
  isDog: true,
  breed: 'mutt',
  legs: 4,
  age: 2,
  toys: ['Mrs. Moose', 'bone', 'half a giraffe'],
  // Speak method on the apollo object. Method is a property of an object.
  speak: function(say) {
    console.log(say + " woof woof");
  },
  sayHiTo: function(name, age) {
    console.log("Hi " + name + " woof woof! " + age);
  }
};

apollo.speak("Who are you? ");

// for functions that use multiples parameters, the order matters
apollo.sayHiTo("Stella", 2);

// console object is a gobal object within the browser
console.log(console);
