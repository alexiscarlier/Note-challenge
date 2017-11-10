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
  noteList = new NoteList();
  view = new View(noteList);
  noteList.createNote("Hello, this is a string over 20 characters long");
  noteList.createNote("Bye, this is also a string over 20 characters long");
  assert.isTrue(view.display(noteList) === '<ul><li><div><a href="#notes/0">Hello, this is a str</a></div></li><li><div><a href="#notes/1">Bye, this is also a </a></div></li></ul>');
}

ViewNoteList();

// noteList = new NoteList();
// noteList.createNote("this is test note #1");
// view = new View(noteList);
