var getPermutation = function (n, k) {
    let ascNArr = [];
    let num = "";
    for (let a = 1; a <= n; a++) {
        ascNArr.push(a)
    }
    function factorialFunc(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    for (let x = 1; x <= n; x++) {
        let factorial = n * factorialFunc((n - x) - 1)
        console.log(factorial);
        if (factorial > k) {
            num += "1"
        } else {
            let multiplier = Math.ceil(k / factorial)
            let c = multiplier * factorial
            let index = c / factorial
            num += ascNArr[index - 1].toString()
        }
    }
    return num
};
console.log(getPermutation(4, 11));