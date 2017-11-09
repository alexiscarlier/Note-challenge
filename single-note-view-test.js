var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('the test passes');
    }
  }
};

function singleNoteHTML() {
  note = new Note("hi js");
  singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.noteToHTML() === "<div>hi js</div>");
}

singleNoteHTML();
