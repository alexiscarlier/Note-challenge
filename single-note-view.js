(function(exports) {

  function SingleNoteView(note) {
    this._note = note;
  }

  SingleNoteView.prototype.getNote = function() {
    return this._note;
  };

  SingleNoteView.prototype.noteToHTML = function() {
    noteContents = this.getNote().showContents();
    return "<div>" + noteContents + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
