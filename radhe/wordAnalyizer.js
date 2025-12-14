function wordAnalyzer(word) {
  if (word === null || word === undefined) {
    console.log("Invalid input");
    return;
  }

  word = String(word).trim();

  // 🔹 empty string check (trim ke baad)
  if (word === "") {
    console.log("Invalid input");
    return;
  }
  // total number of charcter
  let wordCount = 0;
  for (let i = 0; i < word.length; i++) {
    wordCount++;
  }

  // vowels count

  let vowelCount = 0;
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u"
    )
      vowelCount++;
  }

  // consonent count
  let consonantCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (
      word[i] >= "a" &&
      word[i] <= "z" &&
      !(
        word[i] === "a" ||
        word[i] === "e" ||
        word[i] === "i" ||
        word[i] === "o" ||
        word[i] === "u"
      )
    ) {
      consonantCount++;
    }
  }

  return {
    totalCharacters: wordCount,
    vowels: vowelCount,
    consonants: consonantCount,
    firstChar: word.charAt(0),
    lastChar: word.charAt(word.length - 1),
    reversed: word.split("").reverse().join(""),
  };
}

console.log(wordAnalyzer("JavaScript"));

