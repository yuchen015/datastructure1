var ary1=[0,5,8,1,7];
var ary2=ary1;//[0,5,8,1,7];
var ary2=[0,5,8,1,7];
console.log("ary1==ary2?"+(ary1==ary2));//補充：兩個等號是兩邊資料型態一樣，三個等號是資料型態和數值都一樣

//JSON String
console.log(JSON.stringify(ary1))
console.log(JSON.stringify(ary2))
var ary1Str = JSON.stringify(ary1);//將陣列轉成字串

console.log("ary1==ary2?"+(JSON.stringify(ary1)==JSON.stringify(ary2)))//==(較鬆散)和===(較嚴格)都是比較記憶體中的飲用位置

//duplicate
var ary3 = ary1.slice()
ary3[0]=10;
var ary4 = JSON.parse(ary1Str);//將陣列轉成物件
ary4[0]=10;
console.log("ary1[0]="+ary1[0])
