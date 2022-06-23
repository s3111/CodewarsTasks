function getCount(str) {
    let count = 0
    str.split('').map(l => {
        if('aeiou'.includes(l)) count++
    })
    return count
}

console.log(getCount("abracadabra")) // 5

/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/