function reverseVowels(str) {
  const vowels = "aeiou";
  const reversedVowels = str
    .split("")
    .filter((letter) => vowels.includes(letter.toLowerCase()))
    .reverse();
  let count = 0;
  let answer = "";
  for (const val of str) {
    if (reversedVowels.includes(val)) {
      answer += reversedVowels[count];
      count++;
    } else {
      answer += val;
    }
  }
  return answer;
}
