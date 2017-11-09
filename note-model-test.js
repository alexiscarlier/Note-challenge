var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('the test passes');
    }
  }
};


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
