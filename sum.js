function sum(n){ //將0~n之間的數字相加
    var result=0;//宣告變數初始值為0
    for (let i = 0; i <= n; i++) {
        result=result+i;
    }
    return result;
}
console.log("1+2+3+...+100="+sum(100));