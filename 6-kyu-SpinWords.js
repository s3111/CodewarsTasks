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


In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/