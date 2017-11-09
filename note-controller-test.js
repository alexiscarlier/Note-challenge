var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('the test passes');
    }
  }
};

noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.getAndUseHTML();

function correctInnerHTML() {
  noteList = new NoteList();
  noteController = new NoteController(noteList);
  noteController.getAndUseHTML();
  assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
}

correctInnerHTML();
