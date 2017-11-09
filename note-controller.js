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

  function NoteController(noteList) {
    noteList.addNote("Favourite drink: seltzer");
    this._view = new View(noteList);
  }

  NoteController.prototype.getView = function() {
    return this._view;
  };

  NoteController.prototype.getAndUseHTML = function() {
    var element = document.getElementById("app");
    var currentView = noteController.getView();
    element.innerHTML = currentView.display();
  };

  exports.NoteController = NoteController;
})(this);
