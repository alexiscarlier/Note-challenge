var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('the tests passes and shit');
    }
  }
};

function ViewNoteList() {
  view = new View();
  noteList = new NoteList();
  noteList.addNote("hi");
  noteList.addNote("bye");
  assert.isTrue(view.display(noteList) === "<ul><li><div>hi</div></li><li><div>bye</div></li></ul>");
}

ViewNoteList();
