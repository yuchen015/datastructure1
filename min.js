function min(A){
    if (Array.isArray(A)){//確認A是陣列數才開始執行迴圈
    var min=A[0];//設最小值是A的第一個數[0]

    for (let index = 1; index < A.length; index++) {//index可理解為第幾項，length代表陣列總項數
       if (A[index] < min)
          min = A[index];
    }
    return min;
 }else{
    return "Error input!"
 }
}
var Ary=[0,5,3,9,6,7,2,1];//陣列
console.log("Min (10)="+min(10));//拿來偵測錯誤用

console.log("Min="+min(Ary))//console.log式指印出括弧中的內容