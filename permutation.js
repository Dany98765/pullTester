function factorialFunc(n) {
    let factorial = n
    for (let i = n - 1; i >= 1; i--) {
        factorial *= i
    }
    return factorial == 0 ? 1 : factorial
}
var getPermutation = function (n, k) {
    let ascNArr = [];
    let num = "";
    for (let a = 1; a <= n; a++) {
        ascNArr.push(a)
    }
    for (let x = 1; x <= n; x++) {
        let factorial = factorialFunc((n - x))
        console.log("N: " + n + " X: " + x + " FACTORIAL FUNC: " + factorialFunc((n - x)) )
        if (factorial > k) {
            num += ascNArr[x - 1].toString()
        } else {
            let multiplier = x == 1 ? Number.isInteger(k / factorial) ? (k / factorial) + 1 : Math.ceil(k / factorial) : Number.isInteger(factorialFunc(n - (x - 1)) / factorialFunc(n - x)) ? (factorialFunc(n - (x - 1)) / factorialFunc(n - x)) + 1 : Math.ceil(factorialFunc(n - (x - 1)) / factorialFunc(n - x))
            num += (ascNArr[multiplier - 1]).toString()
        }
    }
    return num
};
console.log("PERMUTATION VALUE: " + getPermutation(4, 12));