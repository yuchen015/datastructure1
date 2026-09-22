var weight=56;
var height=168;

var readline = require("readline-sync")//user input

//使用者輸入體重
while (true){
    weight = readline.questionFloat('Your weight (10~200KG)?');
    if (weight < 10 || weight > 200){
        console.log("Please 10~200!");
        continue;
    }else
        break;
}

//使用者輸入身高
while(true){
    height = readline.questionFloat('Your weight (110~200CM)?');
    if(height < 110 || height > 200){
        console.log("Please 110~200!");
        continue;
    }
    else
        break;
}

var bmi = weight/((height/100)**2);
console.log("Your BMI value is "+ bmi);//計算身高體重並輸出

//函數test
function test(){
    var weight=50;
    console.log("weight="+weight)
    return weight;
}
var result=test();
console.log("weight="+weight)//函數輸出