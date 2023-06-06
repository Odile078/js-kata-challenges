function calculateAverage(numbers) {
  return (
    numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) / numbers.length
  );
}
