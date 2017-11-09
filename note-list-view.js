(function(exports) {

function View(noteList) {
  this._noteList = noteList;
}

View.prototype.noteList = function() {
  return this._noteList;
};

View.prototype.display = function() {
  htmlString = "<ul>";
  noteList.getNotes().forEach(function(note) {
    shortenedNote = note.substring(0,20);
    noteID = 1;
    htmlString += '<li><div><a href="#notes/' + noteID.toString() + '"' +">" + shortenedNote + "</a></div></li>";
  });
  htmlString += "</ul>";
  return htmlString;
};

  exports.View = View;
})(this);
