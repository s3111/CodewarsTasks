/*
function runningPace(distance, time){
    let timeArr = time.split(':')
    let seconds = timeArr[0] * 60 + timeArr[1] * 1
    let pase = seconds / distance
    let paseMin = Math.floor(pase / 60)
    let paseSec = Math.floor(pase - paseMin * 60)
    return paseMin + ':' + ('00' + paseSec).slice(-2)
}

console.log(runningPace(1, "3:15"))


*/
/*
function topThreeWords(text) {
    let words = text.replace(/[^a-zA-Z' ]/gi, '').replace(/\s+/g, ' ').replace(/ ' /g, ' ').trim().toLowerCase().split(' ')
    //let tmp = text.replace(/[^a-zA-Z' ]/gi, '').replace(/\s+/g, ' ').replace(/ ' /g, ' ').trim().toLowerCase()
    let map = new Map()
    let res = []
    words.map(w => {if(w) map.set(w, (map.get(w) ? map.get(w) : 0) + 1)})
    //console.log(words)
    //console.log('"' + tmp + '"')
    let sort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let i = 0
    for (const key of sort.keys()) {
        res.push(key)
        i++
        if(i>2) break
    }
    return res
}

//console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"))
//console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))
console.log(topThreeWords("  ...  "))
console.log(topThreeWords("  '  "))

//Test.assertDeepEquals(topThreeWords("  ...  "), [])
//Test.assertDeepEquals(topThreeWords("  '  "), [])
*/
/*
function expandedForm(num) {
    return num.toString().split('').reverse().map((v,k) => {
        if(parseInt(v)) return v + '0'.repeat(k)
    }).filter(v => {
        return parseInt(v)
    }).reverse().join(' + ')
}

console.log(expandedForm(70304));
*/
function anagrams(word, words) {
    word = word.split('').sort().join()
    return words.filter(w => {
        if(w.split('').sort().join() === word) return w
    })
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));