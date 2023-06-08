function recursiveSum(array) {
  if (array.length === 0) return 0;
  const [firstValue, ...rest] = array;

  return firstValue + recursiveSum(rest);
}
