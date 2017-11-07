(function(exports) {

  function Note(contents) {
    this.text = contents;
  }

  Note.prototype.showContents = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);
