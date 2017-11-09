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
  console.log("BELOW IS CONTROLLER PAGE");
  console.log(document.getElementById("app").innerHTML);
  assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div><a href="#notes/1">Favourite drink: sel</a></div></li></ul>');
}

correctInnerHTML();
