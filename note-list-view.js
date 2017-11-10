(function(exports) {

function View(noteList) {
  this._noteList = noteList;
}

View.prototype.noteList = function() {
  return this._noteList;
};

View.prototype.display = function() {
  htmlString = "<ul>";
  var noteArray = this.noteList().getNotes().map(function(note, index) {
    noteContents = note.showContents();
    shortenedNote = noteContents.substring(0,20);
    return '<li><div><a href="#notes/' + index + '">' + shortenedNote + "</a></div></li>";
  });
  htmlString += noteArray.join("") + "</ul>";
  return htmlString;
};

  exports.View = View;
})(this);
