function humanReadable (seconds) {
    let p = '00'
    let h = Math.floor(seconds / (60 * 60))
    let m = Math.floor((seconds - h * 60 * 60) / 60)
    let s = seconds % 60
    return (p + h).slice(-2) + ':' + (p + m).slice(-2) + ':' + (p + s).slice(-2)
}

console.log(humanReadable(0)) // '00:00:00'
console.log(humanReadable(59)) // '00:00:59'
console.log(humanReadable(60)) // '00:01:00'
console.log(humanReadable(90)) // '00:01:30'
console.log(humanReadable(3599)) // '00:59:59'
console.log(humanReadable(3600)) // '01:00:00'
console.log(humanReadable(45296)) // '12:34:56'
console.log(humanReadable(86399)) // '23:59:59'
console.log(humanReadable(86400)) // '24:00:00'
console.log(humanReadable(359999)) // '99:59:59'

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

https://www.codewars.com/kata/52685f7382004e774f0001f7
*/