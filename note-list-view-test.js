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
  console.log("BELOW IS LIST VIEW PAGE");
  console.log(view.display(noteList));
  assert.isTrue(view.display(noteList) === '<ul><li><div><a href="#notes/1">Hello, this is a str</a></div></li><li><div><a href="#notes/1">Bye, this is also a </a></div></li></ul>');
}

ViewNoteList();
