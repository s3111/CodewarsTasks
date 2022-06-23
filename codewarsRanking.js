class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Точка";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; //undefined
p1.distance;    //undefined
p2.displayName; //undefined
p2.distance;    //undefined

console.log(Point.displayName);      // "Точка"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
/*
class User {
    constructor() {
        this.rank = -8
        this.progress = 0
    }

    get progress() {
        return this.progress();
    }
    get rank() {
        return this.rank();
    }
    static incProgress(lvl) {
        this.rank ++
        this.progress += 10
    }

}
*/
//const user = new User(10, 10);
//console.log(square.area); // 100

    /*
    const user = new User()
console.log(user.rank) // => -8
console.log(user.progress) // => 0

//user.incProgress(-7)
//user.progress // => 10
//user.incProgress(-5) // will add 90 progress
//user.progress // => 0 // progress is now zero
//user.rank // => -7 // rank was upgraded to -7

 */