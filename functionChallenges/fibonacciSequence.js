function fibonacciSequence(limit) {
  if (limit <= 1) return [];
  const sequence = [0, 1];

  for (let i = 2; i <= limit; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    if (nextNumber > limit) break;
    sequence.push(nextNumber);
  }
  return sequence;
}
