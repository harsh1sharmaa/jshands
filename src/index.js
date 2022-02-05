// this is comment
/* This is a
multi-line comment */

let x=1;
var y=2;
console.log(x);
const a1=3;
var val;

var myVar;
myVar = 5;
console.log(myVar);
 let num=myVar;

 let myvalu=10;
 let str="harsh sharma";
console.log(str);


var a=5;
var b=10;
var c ="I am a";


a = a + 1;
b = b + 5;
c = c + " String!";

var studlyCapVar;
var properCamelCase;
var titleCaseOver;


studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


let catName = "Oliver";
let catSound = "Meow!";

const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 

const sum = 10 + 10;

const difference = 45 - 33;

const product = 8 * 10;
let count = 0;

function cc(card) {
  // Only change code below this line
  let x=" Bet";
  if(card== 2 || card==3|| card==4|| card==5 ||card==6){
    count++;
  }else if(card==10|| card=='J' || card=='Q'|| card=='K' || card=='A'){
    count--;
    x=" Hold";

  }


  return count+x;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');