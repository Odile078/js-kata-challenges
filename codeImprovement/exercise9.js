function calculateMatrixSum(matrix) {
  return matrix
    .flat()
    .reduce((total, nextValue) => total + nextValue, 0);
}
