function sumIntervals(intervals) {
    intervals.sort(function(a,b){return a[0] - b[0]})
    let etalon = [intervals[0]]
    let len = intervals[0][1] - intervals[0][0]
    for(let i = 1; i<intervals.length; i++){
        if     (etalon[etalon.length-1][1] < intervals[i][0]) {
            len += intervals[i][1] - intervals[i][0]
            etalon.push(intervals[i])
        }
        else if(etalon[etalon.length-1][1] < intervals[i][1]) {
            len += intervals[i][1] - etalon[etalon.length-1][1]
            etalon[etalon.length-1][1] = intervals[i][1]
        }
    }
    return len
}

//const test1 = [[1,5]];
//const test2 = [[1,5],[6,10]];
//const test3 = [[1,5],[6,10],[8,11]];
//console.log(sumIntervals(test1))
//console.log(sumIntervals(test2))
//console.log(sumIntervals(test3))

console.log(sumIntervals( [
    [ -20, 10 ],
    [ -18, -17 ],
    [ -16, -3 ],
    [ -12, 6 ],
    [ -12, 19 ],
    [ -8, -7 ],
    [ -2, 11 ],
    [ 6, 20 ]
] )) // => 40
/*
console.log(sumIntervals( [
    [-2,-1],
    [-10, -6],
    [-15, -11]
] )) // => 9


console.log(sumIntervals( [
    [1,4],
    [7, 10],
    [3, 5]
] )) // => 7

console.log(sumIntervals( [
    [5, 11],
    [16, 19],
    [1,5],
    [10, 20],
    [1, 6],


] )) // => 19
*/
/*
function sumIntervals(intervals) {
    intervals.sort(function(a,b){
        //if(a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })
    let etalon = [intervals[0]]
    let len = intervals[0][1] - intervals[0][0]
    console.log(intervals,intervals[0],len)
    console.log('-----')
    for(let i = 1; i<intervals.length; i++){
        console.log('---')
        console.log(i,')',etalon[etalon.length-1])
        if     (etalon[etalon.length-1][1] < intervals[i][0]) {
            len += intervals[i][1] - intervals[i][0]
            etalon.push(intervals[i])
            console.log('push')
        }
        else if(etalon[etalon.length-1][1] < intervals[i][1]) {
            len += intervals[i][1] - etalon[etalon.length-1][1]
            etalon[etalon.length-1][1] = intervals[i][1]
            console.log('merge')
        }
        console.log(intervals[i],len)
    }
    return len
}



function sumIntervals(intervals) {
    intervals.sort(function(a,b){return a[0] - b[0]})
    let len = intervals[0][1] - intervals[0][0]
    console.log(intervals)
    for(let i = 1; i<intervals.length; i++){
        if     (intervals[i-1][1] < intervals[i][0]) len += intervals[i][1] - intervals[i][0]
        else if(intervals[i-1][1] < intervals[i][1]) len += intervals[i][1] - intervals[i-1][1]
        console.log(len)
    }
    return len
}



function sumIntervals(intervals) {
    //if(intervals.length === 1) return
    //let intersections = [intervals[0]]
    let len = intervals[0][1] - intervals[0][0]
    intervals = intervals.sort((a,b) => {
        return a[0] - b[0]
    })

    for(let i = 1; i<intervals.length; i++){
        // end of prev < start => push
        if     (intervals[i-1][1] < intervals[i][0]) {
            len += intervals[i][1] - intervals[i][0]
            //intersections.push(intervals[i])
        }
            // end of prev < end = > merge
        else if(intervals[i-1][1] < intervals[i][1]) {
            //intersections[intersections.length - 1][1] = intervals[i][1]
            len += intervals[i][1] - intervals[i-1][1]
        }
    }

    return len
}

 */