function expandedForm(num) {
    return num.toString().split('').reverse().map((v,k) => {
        if(parseInt(v)) return v + '0'.repeat(k)
    }).filter(v => {
        return parseInt(v)
    }).reverse().join(' + ')
}

console.log(expandedForm(12)) // '10 + 2'
console.log(expandedForm(42)) // '40 + 2'
console.log(expandedForm(70304)) // '70000 + 300 + 4'

/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
https://www.codewars.com/kata/5842df8ccbd22792a4000245
*/