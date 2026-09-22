var weight=56;
var height=168;

var readline = require("readline-sync")
//user input
while (true){
    weight = readline.questionFloat('Your weight (10~200KG)?');
    if (weight < 10 || weight > 200){
        console.log("Please 10~200!");
        continue;
    }else
        break;
}



var bmi = weight/((height/100)**2);
console.log("Your BMI value is "+ bmi);

function test(){
    var weight=50;
    console.log("weight="+weight)
    return weight;
}
var result=test();
console.log("weight="+weight)