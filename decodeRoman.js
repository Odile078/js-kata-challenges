function decodeRomanNumbers(roman) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return roman.split("").reduce((accumulator, currentValue, index, array) => {
    const nextValue = array[index + 1];

    //Check if currentValue is not Last and next value is larger than currentValue
    return index !== array.length - 1 &&
      romanMap[currentValue] < romanMap[nextValue]
      ? accumulator - romanMap[currentValue]
      : accumulator + romanMap[currentValue];
  }, 0);
}
