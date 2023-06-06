function calculateFactorial(number) {
  if (number <= 1) return 1;

  return number * calculateFactorial(number - 1);
}
