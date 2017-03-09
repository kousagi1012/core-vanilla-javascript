exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    let reverseBinary = num.toString(2).split('').reverse()
    return parseInt(reverseBinary[bit - 1])
  },

  base10: function (str) {
    return parseInt(str, 2)
  },

  convertToBinary: function (num) {
    let binary = num.toString(2)
    if (binary.length > 8) {
      return binary.slice(binary.length - 8)
    } else if (binary.length < 8) {
      let padding = '0'
      return padding.repeat(8 - binary.length) + binary
    }
    return binary
  },

  multiply: function (a, b) {
    const decimalPlace = Math.pow(10, b.toString().length - 2)
    return Math.round([(a * b) * decimalPlace]) / decimalPlace
  }
};