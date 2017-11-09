(function(exports) {

function View(noteList) {
  this._noteList = noteList;
}

View.prototype.noteList = function() {
  return this._noteList;
};

View.prototype.display = function() {
  htmlString = "<ul>";
  noteList.notes().forEach(function(note) {
    shortenedNote = note.substring(0,20);
    htmlString += "<li><div>" + shortenedNote + "</div></li>";
  });
  htmlString += "</ul>";
  return htmlString;
};

  exports.View = View;
})(this);
