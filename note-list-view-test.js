var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('the test passes');
    }
  }
};

function ViewNoteList() {
  view = new View();
  noteList = new NoteList();
  noteList.addNote("Hello, this is a string over 20 characters long");
  noteList.addNote("Bye, this is also a string over 20 characters long");
  assert.isTrue(view.display(noteList) === "<ul><li><div>Hello, this is a str</div></li><li><div>Bye, this is also a </div></li></ul>");
}

ViewNoteList();
