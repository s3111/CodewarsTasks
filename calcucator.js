function zero(fn){
    return fn ? fn(0) : 0
}
function one(fn){
    return fn ? fn(1) : 1
}
function two(fn){
    return fn ? fn(2) : 2
}
function three(fn){
    return fn ? fn(3) : 3
}
function four(fn){
    return fn ? fn(4) : 4
}
function five(fn){
    return fn ? fn(5) : 5
}
function six(fn){
    return fn ? fn(6) : 6
}
function seven(fn){
    return fn ? fn(7) : 7
}
function eight(fn){
    return fn ? fn(8) : 8
}
function nine(fn){
    return fn ? fn(9) : 9
}

function plus(a){
    return (b) => a + b
}
function minus(a){
    return (b) => b - a
}
function times(a){
    return (b) => a * b
}
function dividedBy(a){
    return (b) => Math.floor(b / a)
}


//console.log(one(plus(four())))
//console.log(one(plus(four(plus(three())))))
//console.log(one(minus(four())))
console.log(two(mult(four())))
console.log(six(divide(three())))