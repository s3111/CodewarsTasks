function sumIntervals(intervals) {
    intervals.sort(function (a, b) {
        return a[0] - b[0]
    })
    let etalon = [intervals[0]]
    let len = intervals[0][1] - intervals[0][0]
    for (let i = 1; i < intervals.length; i++) {
        if (etalon[etalon.length - 1][1] < intervals[i][0]) {
            len += intervals[i][1] - intervals[i][0]
            etalon.push(intervals[i])
        } else if (etalon[etalon.length - 1][1] < intervals[i][1]) {
            len += intervals[i][1] - etalon[etalon.length - 1][1]
            etalon[etalon.length - 1][1] = intervals[i][1]
        }
    }
    return len
}

let test1 = [[1, 5]];
let test2 = [[1, 5], [6, 10]];
console.log(sumIntervals(test1)) // 4
console.log(sumIntervals(test2)) // 8

test1 = [[1, 5], [1, 5]];
test2 = [[1, 4], [7, 10], [3, 5]];
console.log(sumIntervals(test1)) // 4
console.log(sumIntervals(test2)) // 7

/*
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
Random Tests
100 tests with 1 - 10 intervals from the range [-20, 20]
100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]

https://www.codewars.com/kata/52b7ed099cdc285c300001cd
*/