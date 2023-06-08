function flattenNestedArray(array) {
  let level = 0;

  const checkNesting = (array, currentLevel) => {
    if (!Array.isArray(array)) return;

    level = Math.max(level, currentLevel);

    for (const item of array) {
      checkNesting(item, currentLevel + 1);
    }
  };

  checkNesting(array, 0);
  return array.flat(level);
}
