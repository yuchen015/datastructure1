//Object
var studend1 = {"Chinese": 90, "Math": 80, "English": 70, "Physics": 85, "Chemistry": 75};

//class
class Student {
    constructor(_name, _Chinese, _Math, _English, _Physics, _Chemistry) {
    this.name=_name;
    this.Chinese=_Chinese;
    this.Math=_Math;
    this.English=_English;
    this.Physics=_Physics;
    this.Chemistry=_Chemistry;
}
    printName(){
        console.log(this.name);
    }
    avg(){
        var sum=(this.Chinese+this.Math+this.English+this.Physics+this.Chemistry);
        console.log(this.name+" score avg:"+sum/5);
        }
}
var MD2=[];
/* var s1 = new Student("Chen", 90, 80, 70, 85, 75);
var s2 = new Student("Yu", 80, 90, 60, 70, 80); */
MD2.push(new Student("Chen", 90, 80, 70, 85, 75));
MD2.push(new Student("Yu", 80, 90, 60, 70, 80));
MD2.push(new Student("Yan", 70, 100, 65, 80, 90));

//Chinese avg
var sum=0;
for (let i = 0; i < MD2.length; i++) {
    sum+MD2[i].Chinese;
}
var avg=sum/MD2.length;
console.log("avg="+avg)

MD2[1].printName();
MD2[1].avg();

console.log(JSON.stringify(MD2));//將陣列轉成字串

var ary=[0,5,8,1,7];
//asc
console.log(ary.sort())
//dec
console.log(ary.sort(function(a,b) {
    return b-a;
}));
console.log(MD2.sort())
console.log(ary.sort(function(a,b){
    return b.Math-a.Math;
    }));