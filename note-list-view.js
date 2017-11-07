(function(exports) {

function View(noteList) {
  this._noteList = noteList;
}

View.prototype.noteList = function() {
  return this._noteList;
};

View.prototype.display = function() {
  return ("<ul><li><div><%= noteList.notes%></div></li></ul>");
};

// this method might not work exactly how I want, but it should become clearer
// how to fix this later on
  exports.View = View;
})(this);
