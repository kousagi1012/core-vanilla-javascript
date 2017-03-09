exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function (str) {
    return /[0-9]/.test(str)
  },

  containsRepeatingLetter: function (str) {
    return /([a-z])\1/i.test(str)
  },

  endsWithVowel: function (str) {
    return /[aeiou]$/i.test(str)
  },

  captureThreeNumbers: function (str) {
    let match = /([0-9]){3}/.exec(str)
    return match === null ? false : match[0]
  },

  matchesPattern: function (str) {
    return /(\b\d{3}-\d{3}-\d{4}\b)/.test(str)
  },

  isUSD: function (str) {
    const withCents = /^\$(\b,?\d{1,3})(\b,?\d{3})*\.\d{2}$/gm.test(str)
    const withoutCents = /^\$(\b,?\d{1,3})*(\b,?\d{1,3})$/.test(str)
    const usd = withCents || withoutCents
    return usd
  }
};