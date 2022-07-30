// Log all pairs of array

// const boxes = ['a','b','c','d','e']

// function logAllPairsOfArray(array){
//     array.forEach(i => { // O(n)
//         array.forEach(j=>{ // O(n)
//             console.log(i,j);
//         })
//     });
// }

// logAllPairsOfArray(boxes)

// O(n^2) - Quadratic Time

const boxes1 = ['a','b','c','d','e']
const boxes2 = ['1','2','3','4','5']

function logAllPairsOfArrays(array1, array2){
    array1.forEach(i => { // O(n)
        array2.forEach(j=>{ // O(n)
            console.log(i,j);
        })
    });
}

logAllPairsOfArrays(boxes1, boxes2)

// O(a*b)