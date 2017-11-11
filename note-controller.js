// function helloToHowdy() {
//   var element = document.getElementById("app");
//   console.log(element);
//   console.log(element.innerHTML);
//   element.innerHTML = "howdy";
//   console.log(element.innerHTML);
// }
//
// helloToHowdy();

(function(exports) {

  function NoteController() {
    this._noteList = new NoteList();
    // this._noteList.createNote("Favourite drink: seltzer");
    this._view = new View(this._noteList);
  }

  NoteController.prototype.getView = function() {
    return this._view;
  };

  NoteController.prototype.getAndUseHTML = function() {
    var element = document.getElementById("app");
    var currentView = noteController.getView();
    element.innerHTML = currentView.display();
  };


  // function makeUrlShowFullNote() {
  //   window.addEventListener("hashchange", showFullNoteForPage);
  // }

  NoteController.prototype.makeUrlShowFullNote = function() {
    window.addEventListener("hashchange", showFullNoteForPage);
  };

  function showFullNoteForPage() {
    showNote(getNoteFromUrl(window.location));
  }

  function getNoteFromUrl(location) {
    console.log(location);
    return location.hash.split("/")[1];
  }

  function showNote(note) {
    document
      .getElementById("full-note")
      .innerHTML = noteController._noteList.getNotes()[parseInt(note)].showContents();
  }



  NoteController.prototype.submitListener = function() {
    form = document.getElementById("text");
    form.addEventListener("click", function(event) {
      event.preventDefault();
      noteContents = document.getElementById("note-text").value;
      noteController._noteList.createNote(noteContents);
      noteController.getAndUseHTML();
    });
  };


  exports.NoteController = NoteController;
})(this);


(function(exports) {
  window.onload = function() {
    noteController = new NoteController();
    noteController.submitListener();
    noteController.makeUrlShowFullNote();
    noteController.getAndUseHTML();
  };
})(this);
