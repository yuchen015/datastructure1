var b =[];
var c =[10,15,20,25];//中括弧用在陣列，並且在等號右邊
//JSON
var obj ={"name":"MD","grade":2, "course":"DataSteucture","opton":["dance","playgame"]}//大括弧用來定義物件
b[0]=0;//第0個位置放0
b[1]=0;
b.push(0);//隨時新增值到陣列裡
b.push("abc");//JS陣列可以是數字也可以是文字
b[0]=15;
b[1]=c[2];

console.log("b[3]="+b[3])

function average(s){
    //check data
    var sum=0;
    var avg;
    for (let i = 0; i < s.length;i++) {
        sum += s[i];
    }
    avg = sum/s.length;
    return avg;
}

var ary=[];
var num=5;
var readline = require("readline-sync")
for (let i = 0; i < num; i++) {
    ary[i]=readline.questionFloat("input grade:"+i);
}
console.log("Average="+average(ary));