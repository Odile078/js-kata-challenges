function createPhoneNumber(numbers) {
  return numbers.reduce((acc, currentValue, index) => {
    if (index === 0) return (acc = "(" + currentValue);

    if (index === 2) return (acc = acc + currentValue + ") ");

    if (index === 6) return (acc = acc + "-" + currentValue);

    return (acc = acc + currentValue);
  }, "");
}
