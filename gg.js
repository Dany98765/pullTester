// function factorialFunc(n) {
//     let factorial = n
//     for (let i = n - 1; i >= 1; i--) {
//         factorial *= i
//     }
//     return factorial == 0 ? 1 : factorial
// }
// // eg: n = 7 | k = 3000
// var getPermutation = function (n, k) {
//     let ascNArr = [];
//     let num = "";
//     for (let a = 1; a <= n; a++) {
//         ascNArr.push(a)
//     }
//     for (let x = 1; x <= n; x++) {
//         let prevFactorial = factorialFunc(n - (x - 1)) // 120
//         let currentFactorial = factorialFunc(n - x) // 24(3rd loop)
//         if (x == 1) {
//             let index = Math.floor(k / currentFactorial)
//             num += ascNArr[index].toString()
//             ascNArr.splice(index, 1)
//         } else {
//             let numOfSets = prevFactorial / currentFactorial // 5 sets
//             // let m = Math.floor(k / prevFactorial) // 4
//             let m = Math.floor(k / factorialFunc(n - 1)) // 4
//             let startpoint = m * prevFactorial // 2880
//             let endpoint = (m + 1) * prevFactorial // 3000
//             let valuesInRange = endpoint - startpoint // 120 values
//             for (let y = 0; y < numOfSets; y++) {
//                 let startpointTester = startpoint // 2880
//                 let endpointTester = endpoint // 3000
//                 if (startpointTester <= k && k <= endpointTester) {
//                     num += ascNArr[y]
//                     ascNArr.splice(y, 1)
//                 } else {
//                     startpointTester = startpointTester + ((currentFactorial) * (y + 1))
//                     endpointTester = endpointTester + ((currentFactorial) * (y + 1))
//                 }
//             }
//         }
//     }
//     return num
// };
// console.log("PERMUTATION VALUE: " + getPermutation(7, 3000));
function factorialFunc(n) {
    let factorial = n
    for (let i = n - 1; i >= 1; i--) {
        factorial *= i
    }
    return factorial == 0 ? 1 : factorial
}
// eg: n = 4 | k = 11
var getPermutation = function (n, k) {
    k -= 1
    console.log(k)
    let ascNArr = [];
    let num = "";
    for (let a = 1; a <= n; a++) {
        ascNArr.push(a)
    }
    for (let x = 1; x <= n; x++) {
        let currentFactorial = factorialFunc(n - x) // 6
        let index = Math.floor(k / currentFactorial)
        num += ascNArr[index]
        ascNArr.splice(index, 1)
        k = k % currentFactorial
    }
    return num
};
console.log("PERMUTATION VALUE: " + getPermutation(7, 3000));