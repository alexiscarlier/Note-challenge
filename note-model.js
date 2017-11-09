(function(exports) {

  function Note(contents) {
    this._text = contents;
  }

  Note.prototype.showContents = function() {
    return this._text;
  };

  exports.Note = Note;
})(this);


// (function(exports) {
//
//   exports.Note = function(text) {
//     var _text = text;
//
//     showContents = function() {
//       return _text;
//     };
//
//     setText = function(textInput) {
//       _text = textInput;
//     };
//
//     return { showContents: showContents, setText: setText };
//   };
//
// })(this);

// this is better encapsulation, refactor so it's like this if have time
