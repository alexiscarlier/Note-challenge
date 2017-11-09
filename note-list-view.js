(function(exports) {

function View(noteList) {
  this._noteList = noteList;
}

View.prototype.noteList = function() {
  return this._noteList;
};

View.prototype.display = function() {
  htmlString = "<ul>";
  noteList.notes().forEach(function(element) {
    htmlString += "<li><div>" + element + "</div></li>";
  });
  htmlString += "</ul>";
  return htmlString;
};

  exports.View = View;
})(this);
