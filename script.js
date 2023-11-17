// Cargar notas al inicio
window.onload = function() {
  var notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.forEach(function(note) {
      createNote(note);
  });
}

document.getElementById('new-note').addEventListener('click', function() {
  createNote();
});

function createNote(content = '') {
  var note = document.createElement('div');
  note.className = 'note';

  var textarea = document.createElement('textarea');
  textarea.value = content;
  textarea.addEventListener('input', function() {
      saveNotes();
  });
  note.appendChild(textarea);

  var deleteBtn = document.createElement('span');
  deleteBtn.className = 'delete-note';
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', function() {
      note.remove();
      saveNotes();
  });

  note.appendChild(deleteBtn);
  document.getElementById('notes').appendChild(note);
  saveNotes();
}

function saveNotes() {
  var notes = Array.from(document.querySelectorAll('.note textarea')).map(function(note) {
      return note.value;
  });
  localStorage.setItem('notes', JSON.stringify(notes));
}