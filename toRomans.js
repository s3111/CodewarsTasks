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

console.log(RomanNumerals.toRoman(2008))
console.log(RomanNumerals.fromRoman('MMVIII'))