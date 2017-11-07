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
  assert.isTrue(view.display() === "<ul><li><div><%= noteList.notes%></div></li></ul>");
}

ViewNoteList();
