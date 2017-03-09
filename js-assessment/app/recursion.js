exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {

  listFiles: function (data, dirName) {
    let list = []
    list.push({
      dir: dirName,
      files: data
    })
    return list
  },

  permute: function (arr) {

  },

  fibonacci: function (n) {

  },

  validParentheses: function (n) {

  }
};