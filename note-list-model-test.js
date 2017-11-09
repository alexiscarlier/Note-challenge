var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('the test passes');
    }
  }
};

function listNote() {
  var note = new Note("Random words and stuff!!");
  var list = new NoteList();
  list.addNote(note);
  assert.isTrue(list.notes()[list.notes().length - 1].showContents() === "Random words and stuff!!");
  assert.isTrue(list.notes().pop() === note);
}

listNote();

function createAndstoreNote() {
  var noteContents = "RORY";
  var list = new NoteList();
  list.createNote(noteContents);
  assert.isTrue(list.notes()[list.notes().length - 1].showContents() === 'RORY');
  assert.isTrue(list.notes().pop() === note);
}

createAndstoreNote();
