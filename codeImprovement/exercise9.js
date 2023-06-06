function calculateMatrixSum(matrix) {
  return matrix
    .flat(matrix.length)
    .reduce((total, nextValue) => total + nextValue, 0);
}
