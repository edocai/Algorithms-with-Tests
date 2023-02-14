function transpose(matrix: number[][]): number[][] {
  //creates a new array with the rows and column lengths switched
  const resultMatrix = Array.from({ length: matrix[0].length }, () =>
    new Array(matrix.length).fill(0)
  );

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      //change the columns and rows
      resultMatrix[c][r] = matrix[r][c];
    }
  }

  return resultMatrix;
}

//Time: O(n^2)
//Space: O(n)
