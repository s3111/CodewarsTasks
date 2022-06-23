// 1,1,2,3,5,8,13,21,34

function fibonachi(n){
    if(n <= 0) return 0
    if(n <=2) return 1
    return fibonachi(n-1) + fibonachi(n-2)
}

function fibonachiIterative(n){

}


console.log(fibonachi(3))
console.log(fibonachi(4))
console.log(fibonachi(5))
console.log(fibonachi(6))
console.log(fibonachi(7))
console.log(fibonachi(22))