let str = 'hello world'
/*
function spinWord(str){
    let array = str.split(' ');
    let result = []
    array.map(word => {
        if (word.length < 5) result.push(word)
        else result.push(word.split('').reverse().join(''))
    })
    return result.join(' ')
}

console.log(spinWord(str))
console.log(spinWord("This is a test"))

 */
/*
function vowelsCount(str){
    let count = 0
    str.split('').map(l => {
        if('aeiou'.includes(l)) count++
    })
    return count
}
function XO(str) {
    return str.replace(/[^x]/gi, '').length === str.replace(/[^o]/gi, '').length
}

function order(words){
    return words.split(' ').sort((a,b) => {
        return parseInt(a.match(/(\d)/)[1]) - parseInt(b.match(/(\d)/)[1])
    })
}
console.log(order('4of Fo1r pe6ople g3ood th5e the2'))



let number = function(busStops){
    let inTheBus = 0
    busStops.map(s => {
        inTheBus = inTheBus + s[0] - s[1]
    })
    return inTheBus
}

console.log(number([[10,0],[3,5],[5,8]]))


function humanReadable (seconds) {
    let p = '00'
    let h = Math.floor(seconds / (60 * 60))
    let m = Math.floor((seconds - h * 60 * 60) / 60)
    let s = seconds % 60
    return (p + h).slice(-2) + ':' + (p + m).slice(-2) + ':' + (p + s).slice(-2)
}

console.log(humanReadable(3599))


function validParentheses(parens) {
    let count = 0
    let arr = parens.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '(') count ++;
        else count --
        if (count < 0) return false
    }
    return count === 0
}

console.log(validParentheses( "())("))

function findOutlier(integers){
    let even = 0
    for(let i = 0; i<3; i++){
        if(integers[i] % 2 === 0) even++
    }
    if(even < 2) return integers.filter(i => i % 2 === 0)[0]
    else return integers.filter(i => i % 2 !== 0)[0]
}
console.log(findOutlier([-20092628,174697042,-41515292,-62082906,-90740136,-104808268,-49477548,-115162172,10291574,-101797242,89342308,-90034072,-92987932,-67796059,-62457484,55183608,153064568,-179760544,-73598724,161005068,]))
*/
function deleteNth(arr,n){
    let resArr = []
    let chkArr = []
    arr.map(i => {
        if( !chkArr[i]){
            chkArr[i] = 1
            resArr.push(i)
        }
        else if (chkArr[i] < n){
            chkArr[i]++
            resArr.push(i)
        }
    })
    return resArr
}
console.log(deleteNth([20,37,20,21], 1))