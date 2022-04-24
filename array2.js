// TWO DIMENSIONAL AND MULTI-DIMENSIONAL ARRAYS
// A matrix is a two dimensional array
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

// A function that iterates a two dimesional array
let printMatrix = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        let newMatrix = matrix[i];
        for (let j = 0; j < newMatrix.length; j++) {
            console.log(newMatrix[j]);
        }
    }
}

printMatrix(averageTemp)