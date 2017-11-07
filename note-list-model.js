(function(exports) {

  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.addNote = function(note) {
    this._notes.push(note);
  };

  NoteList.prototype.notes = function() {
    return this._notes;
  };

  NoteList.prototype.createNote = function(noteContents) {
    note = new Note(noteContents);
    this.addNote(note);
  };

  exports.NoteList = NoteList;
})(this);
