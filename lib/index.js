;(win => {
  class TypeWriter {
    constructor (config) {
      var container = config.container; // 容器 需要改变容器的innerHTML值来实现打字效果 DOM
      var strs = config.strs; // 那些句子 Array
      var delay = config.delay || 500; // 打两个字之间的间隔 ms
      var len = strs.length;  // 一共有多少句


      // 用来生成打字的字符串数组 对于除了最后一句的所有句子以外，加上退格的处理效果
      // @params:
      //  str: 一个短语
      //  index: 当前短语在所有短语中的位置 从1开始
      function buildWord (str, index) {
        return index === len ? str.split('') : str.split('').concat('@!del'.repeat(str.length).split('@').slice(1));
      }

      // 打字，对退格进行特殊处理，其余则是直接拼接
      // @params:
      //  word 一个字符
      function writeWord (word) {
        var innerHTML = container.innerHTML;
        if ('!del' === word) {
          container.innerHTML = innerHTML.slice(0, innerHTML.length - 1);
        } else {
          container.innerHTML = innerHTML + '' + word;
        }
      }

      // 每次取出一段话 并调用打字方法
      // @params:
      //  words: 所有短语的集合
      //  index: 短语的位置
      function write (words, index) {
        var word = words.shift();
        if (!word) return console.log('打完鸟');
        word = buildWord(word, ++index);
        typing(word, true, write.bind(this, words, index));
      }

      // 每次取出一个字符，并做延迟调用
      // @params:
      //  words: 一个短语
      //  type: 是否为退格
      //  callback: 当一段话打完以后的回调
      function typing (words, type, callback) { // 打字
        setTimeout(() => {
          var word = words.shift();
          word ? typing(words, '!del' !== word, callback) : callback();
          writeWord(word || '');
        }, type ? delay : delay * 0.4);
      }

      // 开始打字咯！
      write(strs, 0);
    }
  }
  win.TypeWriter = TypeWriter;
})(window);
