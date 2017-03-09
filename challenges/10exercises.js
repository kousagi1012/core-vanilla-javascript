// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
max = (number1, number2) => number1 > number2 ? number1 : number2

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
maxOfThree = (num1, num2, num3) => Math.max(num1, num2, num3)

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
isVowel = (string) => /[aeiou]/i.test(string[0])

// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
translate = (string) => {

}
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
sum = (arr) => arr.reduce((a, b) => {
  return a + b
})

multiply = (arr) => arr.reduce((a, b) => {
  return a * b
})

// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
reverse = (string) => {
  let newString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i]
  }
  return newString
}

// Represent a small bilingual lexicon as a Javascript object in the following fashion
//and use it to translate your Christmas cards from English into Swedish.
// const translation = {
//   "merry": "god",
//   "christmas": "jul",
//   "and": "och",
//   "happy": "gott",
//   "new": "nytt",
//   "year": "år"
// }

// function match(word) {
//   for (let en in translation) {
//     if (RegExp(en).test(word)) {
//       return translation[en]
//     } else {
//       return word
//     }
//   }
// }

// seasonsGreetings = (string) => {
//   let swedish = ''
//   for (let word of string) {
//     swedish += match(string[word])
//   }
//   return swedish
// }

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// filterLongestWord = (arr) => {
//   arr.reduce((a, b) => {
//     b.length - a.length
//   })
// }

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
filterLongWords = (arr, num) => {
  let longerWords = []
  arr.map((word) => {
    if (word.length > num) {
      longerWords.push(word)
    }
  })
  return longerWords
}

//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
charFreq = (string) => {
  let frequencies = {}
  let character, count

  for (let char in string) {
    character = string[char]
    count = frequencies[character]
    frequencies[character] = count ? count + 1 : 1
  }
  return frequencies
}

charFreq = (string) => {
  let count = string.split('').reduce((characters, char) => {
    char in characters ? characters[char]++ : characters[char] = 1
    return characters
  }, {})
  return count
}

// charFreq("abbabcbdbabdbdbabababcbcbab")
// outputs { a: 7, b: 14, c: 3, d: 3 }