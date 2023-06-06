function calculateMatrixSum(matrix) {
  return matrix.reduce((sum, currentValue) => {
    currentValue.forEach((element) => {
      sum += element;
    });
    return sum;
  }, 0);
}
