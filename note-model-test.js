var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('the test passes');
    }
  }
};

function assignsID() {
  var note1 = new Note("This note ID should be 0");
  var note2 = new Note("This note ID should be 1");
  assert.isTrue(note1.ID() === 0);
  assert.isTrue(note2.ID() === 1);
}

assignsID();

function saveNote() {
  var note = new Note("My favourite language is Javascript.");
  assert.isTrue(note.showContents() === "My favourite language is Javascript.");
}

saveNote();

function printsNote() {
  var note = new Note("My favourite language is Javascript.");
  assert.isTrue(note.showContents() === "My favourite language is Javascript.");
}

printsNote();
