const arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']

class RomanNumerals {
    static toRoman(number) {
        if (!number) return ''
        let ret = ''
        let i = arab.length - 1
        while (number > 0) {
            if (number >= arab[i]) {
                ret += roman[i];
                number -= arab[i];
            } else {
                i--
            }
        }
        return ret
    }

    static fromRoman(str) {
        str = str.toUpperCase()
        let ret = 0
        let i = arab.length - 1
        let pos = 0
        while (i >= 0 && pos < str.length) {
            if (str.substr(pos, roman[i].length) == roman[i]) {
                ret += arab[i]
                pos += roman[i].length
            } else {
                i--
            }
        }
        return ret
    }
}

console.log(RomanNumerals.toRoman(1000)) // 'M'
console.log(RomanNumerals.toRoman(4)) // 'IV'
console.log(RomanNumerals.toRoman(1)) // 'I'
console.log(RomanNumerals.toRoman(1990)) // 'MCMXC'
console.log(RomanNumerals.toRoman(2008)) // 'MMVIII'

console.log(RomanNumerals.fromRoman('XXI')) // 21
console.log(RomanNumerals.fromRoman('I')) // 1
console.log(RomanNumerals.fromRoman('IV')) // 4
console.log(RomanNumerals.fromRoman('MMVIII')) // 2008
console.log(RomanNumerals.fromRoman('MDCLXVI')) // 1666

/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
Help
Symbol	Value
I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000

https://www.codewars.com/kata/51b66044bce5799a7f000003
*/