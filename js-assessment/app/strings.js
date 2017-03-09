exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    for (let i = 0; i < str.length; i++) {
      str.replace(RegExp(str[i] + '+', 'g'), str[i].repeat(amount))
    }
    return str
  },

  wordWrap: function (str, cols) {

  },

  reverseString: function (str) {
    return str.split('').reverse().join('')
  }
};