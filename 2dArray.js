var ary2d =[ 
    [1,2,3],
    [2,3,4], 
    [3,4,5], 
    [4,5,6], 
    [5,6,7]];//5*3的陣列
console.log("ary2d[0][1]="+ary2d[0][1])//ary2d[0][1]代表選出第0個陣列重的第1個元素


var M=5, N=7;
var newAry = new Array();//陣列

var idx=0;
for (let row = 0; row < M; row++) {
    newAry.push([])//M的迴圈

    for (let col = 0; col < N; col++) {//N的迴圈
    newAry[row].push(idx++)//方法一：設一個變數idx，然後每次push進去陣列後就+1
    newAry[row].push(row*N+col)//方法二：用row*N+col的方式計算出每個元素的值
    }
}
console.log("newAry="+JSON.stringify(newAry))//將陣列轉成字串;